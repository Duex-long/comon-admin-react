import { useEffect } from 'react';
import { Routes, Route,Navigate   } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import LayoutContainer from './pages/Layout/layout';

const App = () => {
  // const navigate = useNavigate();
  console.log('111')

  const routerRedirect = () => {
    const token = sessionStorage.getItem('token')
    if(!token) {
      console.log('登陆没有token')
      return  <Navigate  to='/login'/>
    }
    return <LayoutContainer/>

  }


  return (
    <div className="App h-full w-full">
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={ routerRedirect() } ></Route>
        <Route path="/login" element={ <HomePage/> } ></Route>
      </Routes>
    </div>
  )
}

export default App
