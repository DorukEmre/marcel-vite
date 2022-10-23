import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Main } from './components'

function App() {
  const [post, setPost] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header />
        <Main />        
      </div>
    </Router>
  )
}

export default App
