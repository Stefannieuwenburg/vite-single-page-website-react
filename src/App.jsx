import {  Routes, Route } from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import Menu from './component/Menu'
import Contact from './component/Contact'
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
              <Route path="Menu" element={<Menu />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Errorpage />} />
          </Routes>
          <Footer/>
      </>
  );
}


