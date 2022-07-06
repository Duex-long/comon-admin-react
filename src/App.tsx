import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './test/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> Welcome to React Router! </h1>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
