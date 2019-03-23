import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('salmon')
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)
  const handleColorChange = () => setColor(color === 'salmon' ? 'gold' : 'salmon')

  // useEffect(() => {
  //   console.log(`componentDidMount. Current count is ${count}`)

  //   return () => {
  //     console.log('ComponentWillUnmount: I am removing anything that was set up above. The last count was: ' + count)
  //   }
  // }, [])

  useEffect(() => {
    console.log(`componentDidMount + componentDidUpdate. Current count is ${count}`)

    return () => {
      console.log('I am removing anything that was set up above. The last count was: ' + count)
    }
  }, [ count ]) // only run useEffect when count changes

  useEffect(() => {
    console.log('color change')
  }, [ color ]) // only run useEffect when color changes

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={handleColorChange}>Change Color</button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  )
}

const LifeCycle = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => setVisible(!visible)

  return (
    <div>
      <button onClick={handleClick}>{visible ? 'Hide' : 'Show'}</button>
      {visible && <Counter />}
    </div>
  )
}

export default LifeCycle;
