import React, { useState } from 'react'
import useToggleState from './hooks/useToggleState'
function Toggler() {
  const [isHappy, toggleIsHappy] = useToggleState(true)
  const [isHeartBroken, toggleIsHeartBroken] = useToggleState(false)
  return (
    <div>
      <h1 onClick={toggleIsHappy} >{isHappy ? 'happy' : 'not happy'}</h1>
      <h1 onClick={toggleIsHeartBroken} >{isHeartBroken ? 'broken heart' : 'unbroken heart'}</h1>
    </div>
  )
}

export default Toggler