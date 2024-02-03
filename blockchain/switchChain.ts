import { snap } from "@/store"
import { Chain } from "@/types"

export async function switchChain(chain:Chain){
  const provider = snap.provider()
  if(!provider){
    new Error('While calling switchChain Provider was undefined')
    return
  }
  await provider.request({
    method: 'wallet_addEthereumChain',
    params: [ chain ],
  })
  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: chain.chainId }],
  }).catch(async (er: any)=>{
    if(typeof chain !== 'number' && (er.code === 4902 || er?.data?.originalError?.code == 4902)){
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [chain],
        })
        .catch(console.error)
    }
  })
}