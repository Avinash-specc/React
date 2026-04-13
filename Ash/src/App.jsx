import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const years = 19;
  return (
    <>
      <div>
      <h1>Hello</h1>
      <p>paragraph</p>
      </div>

      <div>
        <h1>Hello, you are {years} old.</h1>
      </div>
    </>
  )
}

export default App
