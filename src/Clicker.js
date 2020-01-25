import React, { useState, useEffect } from 'react'
function Clicker() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count
  })
  return (
    <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
  )
}

export default Clicker