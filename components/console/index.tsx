import { ScrollToView } from '@/hooks/ScrollToView'
import { states } from '@/store'
import React from 'react'
import s from './styles.module.css'

const Console = () => {
  const logs = states.console()

  return (
    <div className={s.console} >
      {logs.map((log: string, i: number)=><pre key={i} >{log}</pre>)}
      <ScrollToView trigger={logs}/>
    </div>
  )
}

export default Console