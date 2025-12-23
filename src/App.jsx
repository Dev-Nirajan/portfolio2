import './App.css'
import Navbar from './Nav';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'; 
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Routes> <Route path="/about" element={<AboutMe/>} /> </Routes>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
