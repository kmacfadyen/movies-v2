import { useState } from 'react'
import './App.css'

const App = () => {
  const name = "Me";
  const isNameShowing = true;

  return (
    <div className='App'>
      <h1>Hello {isNameShowing ? name : 'someone'}!</h1>
      
    </div>
  )
}

export default App;
