import './App.css'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Resume_template from './components/templates/Resume_template'
import About from './components/About'
import Login from './components/login/Login'
import Footer from './components/Footer'
function App() {

  return (
    <div>
      <Navbar/>{/* Navbar appears on all pages */}
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/templates" element={<Resume_template/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App
