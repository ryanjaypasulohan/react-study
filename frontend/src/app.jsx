import './app.scss'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import './stlyesheets/global.scss'
import './stlyesheets/home.scss'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



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
export default App