import React from 'react';
import App from './App'

export const UserContext = React.createContext()

const ReduxExample = () => {
  return (
    <UserContext.Provider value="Dave">
      <App />
    </UserContext.Provider>
  )
}

export default ReduxExample;
