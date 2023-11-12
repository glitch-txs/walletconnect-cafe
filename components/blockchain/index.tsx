import { signTypeDataV4 } from '@/blockchain'
import React from 'react'
import { switchChain } from '@/blockchain/switchChain'
import { bsc, mainnet } from '@/chains'
import { fetchSession } from '@/walletconnect/utils'
import { approve } from '@/blockchain/approve'

const Blockchain = () => {
  return (
    <div>
      <button onClick={signTypeDataV4} >Sign Type Data v4</button>
      <button onClick={()=>switchChain(mainnet)} >Switch to mainnet</button>
      <button onClick={()=>switchChain(bsc)} >Switch to BSC</button>
      <button onClick={fetchSession} >fetchSession</button>
      <button onClick={approve} >Approve</button>
    </div>
  )
}

export default Blockchain