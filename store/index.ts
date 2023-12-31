import { createStore } from "react-cafe";
import { EthereumProvider } from "@walletconnect/ethereum-provider"

type WCStore = {
  provider?: InstanceType<typeof EthereumProvider> | void,
  address?:string,
  chainId?:number,
  status?:'Initializing' | 'Connecting' | 'Disconnecting'
  console: string[]
}

export const { set, states, snap } = createStore<WCStore>({
  provider: undefined,
  address: undefined,
  chainId: undefined,
  status: 'Initializing',
  console: []
})