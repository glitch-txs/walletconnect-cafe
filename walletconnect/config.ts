//@ts-nocheck
import { EthereumProviderOptions } from '@walletconnect/ethereum-provider/dist/types/EthereumProvider'

export const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  optionalChains:[1, 5, 56, 42161],
  showQrModal: true
} satisfies EthereumProviderOptions