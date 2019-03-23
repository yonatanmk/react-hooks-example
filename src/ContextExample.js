import React, { createContext, useState, useContext } from 'react';

const NameContext = createContext()

// class ContextExample extends React.Component {
//     constructor(props) {
//       super(props)
      
//       this.state = {
//         name: 'Billy Shakespeare'
//       }
//     }

//     render() {
//       return (
//         <NameContext.Provider value={this.state.name}>
//           <Child />
//         </NameContext.Provider>
//       )
//     }
// }

// class Child extends React.Component {
//   render() {
//     return (
//       <div className="child">
//         <Grandchild />
//       </div>
//     )
//   }
// }

// class Grandchild extends React.Component {
//   render() {
//     return (
//       <div className="grandchild">
//         <Button />
//       </div>
//     )
//   }
// }

// class Button extends React.Component {
//   render() {
//     return (
//       <NameContext.Consumer>
//         {
//           name => <button>{name}</button>
//         }
//       </NameContext.Consumer>
//     )
//   }
// }

const ContextExample = () => {
  const nameHook = useState('Billy Shakespeare')

  return (
    <NameContext.Provider value={nameHook}>
      <Child />
    </NameContext.Provider>
  )
}
const Child = () => {
  return (
    <div className="child">
      <Grandchild />
    </div>
  )
}

const Grandchild = () => {
  return (
    <div className="grandchild">
      <Button />
    </div>
  )
}

const Button = () => {
  const nameHook = useContext(NameContext)
  const [name, setName] = nameHook

  const changeName = () => setName(name === 'Billy Shakespeare' ? 'Some Other Guy' : 'Billy Shakespeare')

  return <button onClick={changeName}>{name}</button>

}

export default ContextExample;
