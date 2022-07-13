import { Routes, Route,Navigate   } from 'react-router-dom';
import './App.css'
import 'antd/dist/antd.css'
import HomePage from './pages/HomePage/HomePage';
import LayoutContainer from './pages/Layout/layout';

const App = () => {
  // const navigate = useNavigate();

  const routerRedirect = () => <Navigate  to={`/${sessionStorage.getItem('token') ? 'main' : 'login'}`}/>


  return (
    <div className="App h-full w-full">
      <Routes>
        <Route path="/" element={ routerRedirect() } ></Route>
        <Route path="/login" element={ <HomePage/> } ></Route>
        <Route path="/main" element={ <LayoutContainer/> } ></Route>
      </Routes>
    </div>
  )
}

export default App
