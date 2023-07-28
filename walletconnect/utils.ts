import { set, snap } from "@/store"
import { addToConsole, logMessage } from "@/utils"
import { EthereumProvider } from "@walletconnect/ethereum-provider"
import { config } from "./config"
import { listeners } from "./events"

/* Init Function */
export async function initProvider(){
  if(typeof window === 'undefined') return /* Avoid running on server side */
  const provider = await EthereumProvider.init(config).catch(logMessage)

  set.provider(provider), set.status(undefined), listeners()
  if(provider?.session) fetchSession()
}

/* Connect & Disconnect Functions */
export async function handleConnect(){
  set.status('Connecting')
  await getProvider().connect()
  .then(fetchSession).catch(logMessage)
  set.status(undefined)
}

export async function handleDisconnect(){
  const provider = getProvider()
  set.status('Disconnecting')
  if(provider.session) await provider.disconnect()
  clearSession(), set.status(undefined)
}

/* Session utils */
async function fetchAccount(){
  return await snap.provider()?.request<string[]>({
    method: 'eth_accounts'
  })
}

async function fetchChainId(){
  return await snap.provider()?.request<number|string>({
    method:'eth_chainId'
  })
}

export async function fetchSession(){
  const [accounts, chainId] = await Promise.all([
    fetchAccount(),
    fetchChainId()
  ])
  addToConsole(snap.provider()?.session?.namespaces), addToConsole(snap.provider()?.session?.peer)
  set.address(accounts?.[0]), set.chainId(Number(chainId))
}

export function clearSession(){
  set.address(undefined), set.chainId(undefined)  
}

/* Secure provider */
export function getProvider(){
  const provider = snap.provider()
  if(!provider) throw new Error("Provider has not initialized")
  return provider
}