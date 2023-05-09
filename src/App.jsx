import { BrowserRouter, Router } from "react-router-dom"
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech,
//   Works, StarsCanvas } from './components'
import About from './components/About'
import  StarsCanvas  from "./components/canvas/Stars"
import  Navbar  from "./components/Navbar"
import  Experience  from "./components/Experience"
import  Tech  from "./components/Tech"
import  Works  from "./components/Works"
import  Contact  from "./components/Contact"
import  Hero  from "./components/Hero"
import  Feedbacks  from "./components/Feedbacks"
import './index.css'
function App() {

  return (
    <>
     <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
