import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

    const inputSearch = useRef()

    const handleSubmit = e => {
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim())
    }

    return (
   <div>
    <h1>Rick and Morty app</h1>
    <form onSubmit={handleSubmit}>
      <input ref={inputSearch} tyoe="text"/>
      <button>Search</button>
    </form>
    {
      hasError
      ? <h2>❌ Hey! you must provide an id from 1 to 126 😅</h2>
      : (
        <>
    <LocationInfo 
      location={location}
    />
    <div>
      {
        location?.residents.map(url =>(
          <ResidentCard 
            key={url}
            url={url}
          />
        ))
      }
    </div>
    </>

      )
      
    }
   </div>
  )
}

export default App
