//@ts-ignore
import { EthereumProviderOptions } from '@walletconnect/ethereum-provider/dist/types/EthereumProvider'

if(!process.env.NEXT_PUBLIC_PROJECT_ID) throw new Error("Project ID Missing")

export const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  optionalChains:[1, 5, 56, 42161, 11155111, 137],
  showQrModal: true
} satisfies EthereumProviderOptions