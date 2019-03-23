import React from 'react';

const EventListeners = () => {
  const handleClick = e => {
    const { clientX, clientY } = e
    console.log(`Mouse is at ${clientX}, ${clientY}`)
  }

  window.addEventListener('click', handleClick)
  // window.removeEventListener('click', handleClick)

  return (
    <h1>Hello Events</h1>
  )
}

export default EventListeners;
