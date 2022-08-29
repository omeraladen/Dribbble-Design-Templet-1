import { BrowserRouter , Routes , Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";

import Navbar from "./component/Navbar/Navbar";



const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        <Gallery/>
        <Plans/>
        
    </BrowserRouter>
  )
}

export default App;