import './App.css'
import {Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
// import Resume_template from './components/templates/Resume_template'
import About from './components/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import TemplatesPage from './components/templates/TemplatesPage'
import TemplateDetail from './components/templates/TemplateDetail'
import Footer from './components/Footer'
import Form from './components/form/Form'
function App() {

  return (
    <div>
     
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/templates" element={<Resume_template/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/templates/fresher" element={<TemplatesPage category="fresher"/>}/>
        <Route path="/templates/experienced" element={<TemplatesPage category="experienced"/>}/>
        <Route path="/templates/detail/:id" element={<TemplateDetail />} />     
        <Route path="/form" element={<Form />} />     
      </Routes>
      </div>
  )
}

export default App
