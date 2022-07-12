import './App.css'
import HomePage from './pages/HomePage/HomePage';

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
