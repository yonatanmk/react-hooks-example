import React, { useState } from 'react';

const defaultForm = {
  username: '',
  email: '',
  password: '',
}

export default function RegisterForm () {
  const [form, setForm] = useState(defaultForm)
  const { username, email, password } = form;
  const [user, setUser] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const userData = {
      username, 
      email,
      password,
    }

    setUser(userData)
    setForm(defaultForm)
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Register</h2>
      <form style={{ display: 'grid', alignItems: 'center', justifyItems: 'center' }}>
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
        />
        <input 
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={email}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}