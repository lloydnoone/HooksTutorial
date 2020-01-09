import React, { useState } from 'react'
import useToggle from './hooks/useToggle'
function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true)
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false)
  return (
    <div>
      <h1 onClick={toggleIsHappy} >{isHappy ? 'happy' : 'not happy'}</h1>
      <h1 onClick={toggleIsHeartBroken} >{isHeartBroken ? 'broken heart' : 'unbroken heart'}</h1>
    </div>
  )
}

export default Toggler