import { set, snap } from "@/store"
import { EthereumProvider } from "@walletconnect/ethereum-provider"
import { listeners } from "./events"
import { addToConsole, getProvider } from "@/utils"

if(!process.env.NEXT_PUBLIC_PROJECT_ID) throw new Error("Project ID Missing")

/* Init Function */
async function initProvider(){
  if(typeof window === 'undefined') return /**Avoid running on server side */

  const provider = await EthereumProvider.init({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    chains:[1],
    optionalChains:[1, 5, 56, 42161],
    methods:['eth_signTypedData_v4'],
    showQrModal: true
  })
  if(!provider) throw new Error("Error during initialization")

  set.provider(provider)
  
  if(provider.session) fetchSession()

  listeners()
}

/* Initialize Provider */
initProvider()

/* Connect & Disconnect Functions */
export async function handleConnect(){
  await getProvider().connect()
  .then(fetchSession).catch(console.warn)
}

export async function handleDisconnect(){
  const provider = getProvider()
  
  if(provider.session) await provider.disconnect()
  clearSession()
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

async function fetchSession(){
  const [accounts, chainId] = await Promise.all([
    fetchAccount(),
    fetchChainId()
  ])
  addToConsole(snap.provider()?.session?.namespaces)
  set.address(accounts?.[0]), set.chainId(Number(chainId))
}

export function clearSession(){
  set.address(undefined), set.chainId(undefined)  
}