import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';

const initialState = {
  count: 0,
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      }
    case 'decrement':
      return {
        count: state.count - 1,
      }
    case 'reset':
      return initialState
    default:
      return initialState
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext)
  return (
    <div>
      <h2>Hello, {value}</h2>
      <p>Count: {state.count}</p>
      <button className="border m-1 p-1" onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button className="border m-1 p-1" onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button className="border m-1 p-1" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default App;
