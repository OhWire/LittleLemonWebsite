import Navbar from  "./components/Navbar/Navbar"
import Highlights from "./components/Highlights/Highlights";
import HeroSection from "./components/HeroSection/HeroSection";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import ContactUs from "./components/Contact";
import './App.css';
import "@fontsource/karla";




// Navbar
//Hero Section
//Highlights
//Testimonials
//About
//Contact Us




function App() {
  return (
    <div className='container'>
        <Navbar/>
        <HeroSection/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <ContactUs/>
    </div>
  );
}

export default App;
