
import { Route, Routes } from 'react-router-dom'
import './index.css'
import About from './Components/About'
import ResponsiveAppBar from './Components/AppBar'
import Contact from './Components/Contact'
import Home from './Components/Home'
import FirstSection from './Components/MainSection'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import Loader from './Components/Loader/Loader'
import TemporaryDrawer from './Components/Drawer'
import FrequentlyAsked from './Components/F&Qs'
import TermsOfService from './Components/TearmsService'

function App() {

  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", }}>
      {/* <ResponsiveAppBar />  */}
      <TemporaryDrawer/>

      <Routes>
       
        
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
         <Route path="/" element={<Home />} />
          <Route path="/frequently-asked" element={<FrequentlyAsked />} />
          <Route path="/terms-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      

      <Footer /> 
    </div>
  );
}


export default App
