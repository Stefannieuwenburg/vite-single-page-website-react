import {  Routes, Route } from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Policy from './component/Policy'
import Errorpage from './component/Errorpage'
import Navbar from './component/Navbar'
import Footer from './component/Footer'


export default function App() {
  
  return (
      <>
          <Navbar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="policy" element={<Policy />} />
              <Route path="*" element={<Errorpage />} />
          </Routes>
          <Footer/>
      </>
  );
}


