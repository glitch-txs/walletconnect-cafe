import React, { useEffect, useRef } from 'react'

export const ScrollToView = ({ trigger }: { trigger: unknown }) => {
  const logsRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(logsRef.current)
    logsRef.current.scrollIntoView({behavior: 'smooth'})
  }, [trigger])

  return <div ref={logsRef}/>
}