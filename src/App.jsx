import './App.css'
import Top_banners from './components/Top Banners/top_banners'
import Navbar2 from './components/Nav2/Nav2'
import Footeer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
//import { Route , Routes } from 'react-router-dom'
import Aboutus from './Pages/About us/Aboutus'
import Academics from './Pages/Academics/Academics'
function App() {
    return (
    <>
    <Top_banners />
    <Navbar2 />
    <Home /> 
    <Footeer />
    <Aboutus />
    <Academics />
    </>
  )
}

export default App
