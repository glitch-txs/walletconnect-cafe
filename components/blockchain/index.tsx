import { signTypeDataV4 } from '@/blockchain'
import React from 'react'
import s from './styles.module.css'
import { fetchSession, switchChain } from '@/walletconnect/utils'

const Blockchain = () => {
  return (
    <div>
      <button onClick={signTypeDataV4} >Sign Type Data v4</button>
      <button onClick={()=>switchChain(5)} >Switch to </button>
      <button onClick={fetchSession} >Fetch Session</button>
    </div>
  )
}

export default Blockchain