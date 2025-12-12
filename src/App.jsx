import About from "./About"
import  Experience  from "./Experience"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Project from "./Project"
import TextChange from "./TextChange"

function App() {


  return (
    <div className="bg-black h-auto w-full overflow-hidden">
    
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Footer/>
    
    </div>
  )
}

export default App
