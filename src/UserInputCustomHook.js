import React, { useState, useEffect } from 'react';

const UserInputCustomHook = () => {
  const userText = useKeyPress('')

  return (
    <div>
      <h1>Feel free to type. Your text will show up below</h1>
      <blockquote>
        { userText }
      </blockquote>
    </div>
  )
}

const useKeyPress = (startingValue) => {
  const [userText, setUserText] = useState(startingValue)
  const handleUserKeyPress = e => {
    const { key, keyCode } = e
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90 )) {
      setUserText(userText + key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  })
  return userText
}

export default UserInputCustomHook;
