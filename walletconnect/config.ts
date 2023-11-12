//@ts-ignore
import { EthereumProviderOptions } from '@walletconnect/ethereum-provider/dist/types/EthereumProvider'

if(!process.env.NEXT_PUBLIC_PROJECT_ID) throw new Error("Project ID Missing")

export const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [1],
  optionalChains:[1 , 137],
  showQrModal: true
} satisfies EthereumProviderOptions