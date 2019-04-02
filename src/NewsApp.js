import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const App = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('react hooks')
  const [error, setError] = useState(null)
  const searchInputRef = useRef()

  // useEffect(() => {
  //   axios
  //     .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
  //     .then(response => {
  //       console.log(response.data)
  //       setResults(response.data.hits)
  //     })
  // }, [])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      // console.log(response.data)
      setResults(response.data.hits)
    } catch (err) {
      setError(err)
    }
    
    setLoading(false)
  }

  const handleSearch = e => {
    e.preventDefault()
    fetchData()
  }

  const handleClearSearch = () => {
    setQuery('')
    searchInputRef.current.focus()
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
          ref={searchInputRef}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>Clear</button>
      </form>
      {loading ? (
        <div>Loading results...</div>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error.message}</div>}
    </div>
    
  )
}

export default App;
