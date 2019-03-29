import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null,
}

const Hooks = () => {
  const [count, setCount] = useState(0)
  const [mouseLocation, setMouseLocation] = useState(null)
  const [status, setStatus] = useState(navigator.onLine)
  const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState)
  let mounted = true

  useEffect(() => {
    document.title = `You have clicked ${count} times`
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('online', handleOnline)
    document.addEventListener('offline', handleOffline)
    navigator.geolocation.getCurrentPosition(handleGeolocation)
    const watchId = navigator.geolocation.watchPosition(handleGeolocation)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('online', handleOnline)
      document.removeEventListener('offline', handleOffline)
      navigator.geolocation.clearWatch(watchId)
      mounted = false
    }
  }, [count])

  const increase = () => setCount((prevCount) => prevCount + 1)
  const decrease = () => setCount((prevCount) => prevCount - 1)
  const reset = () => setCount(0)
  const handleMouseMove = event => {
    setMouseLocation({ x: event.pageX, y: event.pageY })
  }
  const handleOnline = () => {
    console.log('handleOnline')
    setStatus(true)
  }
  const handleOffline = () => {
    console.log('handleOffline')
    setStatus(false)
  }
  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      })
    }
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <h1>{count}</h1>
      {mouseLocation && <h1>{`Mouse Location: ${mouseLocation.x}, ${mouseLocation.y}`}</h1>}
      <h2>Network Status</h2>
      <p>You are {status ? 'online' : 'offline'}</p>
      <h2>Location</h2>
      <p>Lat is {latitude}</p>
      <p>Lng is {longitude}</p>
      <p>Speed is {speed || 0}</p>
    </div>
  )
}

export default Hooks;
