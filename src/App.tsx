import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import About from './test/About/About';
import Home from './test/Home/Home';

const App = () => {


  return (
    <div className="App h-full w-full">
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes> */}
      <HomePage/>
    </div>
  )
}

export default App
