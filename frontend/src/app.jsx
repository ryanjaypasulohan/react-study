
import './app.scss'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import Home from './pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stlyesheets/global.scss'

export function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}
