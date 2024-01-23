import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

// Api key: f1a20cee

const API_URL = 'http://www.omdbapi.com?apikey=f1a20cee';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
 
  useEffect(() => {
    searchMovies('Harry Potter');
  }, []);

  return (
    <h1>App</h1>
  )
}

export default App;
