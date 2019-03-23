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

const Counter = () => {
  const [count, setCount] = useState(0)

  // const handleClick = () => setCount(count + 1)
  const increase = () => setCount((prevCount) => prevCount + 1)
  const decrease = () => setCount((prevCount) => prevCount - 1)
  const reset = () => setCount(0)

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter;
