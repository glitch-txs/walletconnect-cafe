import { states } from '@/store'
import React from 'react'
import s from './styles.module.css'
import { handleConnect, handleDisconnect } from '@/walletconnect'
import Blockchain from '../blockchain'
import { clearStorage } from '@/utils'

const connectHTML = <button onClick={handleConnect} >Connect</button>
const disconnectHTML = <button onClick={handleDisconnect} >Disconnect</button>

const Controls = () => {

  const [address, chainId] = [states.address(), states.chainId()]
  const status = states.status()

  return (
    <div className={s.controls}>
      Status: {status}

      {address ? disconnectHTML : connectHTML}    

      <span>address: {address}</span>
      <span>chain ID: {chainId}</span>

      {address && <Blockchain/>}

      <button onClick={clearStorage} className={s.storage}>
        Clear Local Storage
      </button>
    </div>
  )
}

export default Controls