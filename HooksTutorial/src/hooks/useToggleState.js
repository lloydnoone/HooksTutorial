import { useState } from 'react'

function useToggleState(initialVal = false) {
  //reserve peice of state
  const [state, setState] = useState(initialVal)
  const toggle = () => {
    setState(!state)
  }
  return [state, toggle]
}

export default useToggleState



