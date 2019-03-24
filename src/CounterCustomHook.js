import React, { useState } from 'react';

// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       count: 0
//     }
//   }

//   handleClick = () => {
//     // this.setState({ count: this.state.count + 1 })
//     this.setState((prevState => ({ count: prevState.count + 1 })))
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>+</button>
//         <h1>{this.state.count}</h1>
//       </div>
//     )
//   }
// }

const CounterCustomHook = ({ startingValue }) => {
  const { count, increase, decrease, reset } = useCounter(startingValue)

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

const FancyCounterCustomHook = ({ startingValue }) => {
  const { count, increase, decrease, reset } = useCounter(startingValue)

  return (
    <section style={{ backgroundColor: 'salmon' }}>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <h2 >{count}</h2>
    </section>
  )
}

const useCounter = (startingValue) => {
  const [count, setCount] = useState(startingValue)

  const increase = () => setCount((prevCount) => prevCount + 1)
  const decrease = () => setCount((prevCount) => prevCount - 1)
  const reset = () => setCount(startingValue)
  return {
    count,
    increase,
    decrease,
    reset
  }
}

const App = () => {
  return (
    <div>
      <CounterCustomHook startingValue={10} />
      <CounterCustomHook startingValue={100} />
      <FancyCounterCustomHook startingValue={1000} />
    </div>
  )
}


export default App;
