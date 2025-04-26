
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import ResponsiveAppBar from './Components/AppBar'
import Contact from './Components/Contact'
import Home from './Components/Home'
import FirstSection from './Components/MainSection'
import Footer from './Components/Footer'

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", }}>
      <ResponsiveAppBar /> 

      <Routes>
       
        
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
         <Route path="/" element={<Home />} />
      </Routes>
      

      <Footer /> 
    </div>
  );
}


export default App
