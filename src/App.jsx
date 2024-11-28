import './App.css'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Resume_template from './components/templates/Resume_template'
import About from './components/About'
import Login from './components/login/Login'
import Footer from './components/Footer'
import TemplatesPage from './components/templates/TemplatesPage'
import TemplateDetail from "./components/templates/TemplateDetail";
function App() {

  return (
    <div>
      <Navbar/>{/* Navbar appears on all pages */}
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/templates" element={<Resume_template/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/templates/fresher" element={<TemplatesPage category="fresher"/>}/>
        <Route path="/templates/experienced" element={<TemplatesPage category="experienced"/>}/>
        <Route path="/templates/detail/:id" element={<TemplateDetail />} />;     
      </Routes>
      <Footer/>
      </div>
  )
}

export default App
