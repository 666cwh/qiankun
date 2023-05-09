import React, { useState } from 'react'

function HookuseEffect() {
  const [counter, setCounter] = useState(200)
  function btnCounter() {
    setCounter(20000)
  }
  return (
    <div>
      <h3>useEffect</h3>
      <button onClick={btnCounter}>修改</button>
      <div>{counter}</div>
    </div>
  )
}

export default HookuseEffect
