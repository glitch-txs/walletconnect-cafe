import { signTypeDataV4 } from '@/blockchain'
import React from 'react'
import s from './styles.module.css'

const Blockchain = () => {
  return (
    <div>
      <button onClick={signTypeDataV4} >Sign Type Data v4</button>
    </div>
  )
}

export default Blockchain