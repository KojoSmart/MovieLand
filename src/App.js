/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react'
import './App.css'
import MovieCard from './MovieCard'
import SearchIcon from './search.svg'
//ced4ef98
const API_URL ='http://www.omdbapi.com?apikey=ced4ef98'




function App() {

  const[searchItem, setSearchItem] = useState("")
  const[movies, setMovies]= useState([])
  const searchMovies = async(title)=>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search)
}

  useEffect(()=>{
 searchMovies('Batman')
  },[])
  
  return (
    <div className="app">
     <h1>MovieLand</h1>
     <div className='search'>

      <input
      placeholder='Search for movies'
      value={searchItem}
      onChange={(e)=>setSearchItem(e.target.value)}
      />
      <img
      src={SearchIcon}
      alt="search"
      onClick={()=>searchMovies(searchItem)}
      />
      
     </div>
     {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
