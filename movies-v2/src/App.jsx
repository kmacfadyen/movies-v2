import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

// Api key: f1a20cee

const API_URL = 'http://www.omdbapi.com?apikey=f1a20cee';

const App = () => {
  const [movies, setMovies] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
 
  useEffect(() => {
    searchMovies('Harry Potter');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value='Superbad'
          onChange={() => {}}
        />
        <img 
          src='https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'
          alt='search'
          onClick={() => {}}
        />
      </div>

      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  )
}

export default App;
