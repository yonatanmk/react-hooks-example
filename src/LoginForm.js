import React, { useState } from 'react';

export default function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const userData = {
      username, 
      password,
    }

    setUser(userData)
    setUsername('')
    setPassword('')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <form style={{ display: 'grid', alignItems: 'center', justifyItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <input 
          type="password" 
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}