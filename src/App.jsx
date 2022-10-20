import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Main } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Header />
        <Main />   
      </div>
  )
}

export default App
