import './App.css';
import AboutUs from './myComponents/AboutUs';
import Accrediation from './myComponents/Accrediation';
import Blog from './myComponents/Blog';
import Footer from './myComponents/Footer';
import Header from './myComponents/Header';
import HeroSection from './myComponents/HeroSection';
import OurGuards from './myComponents/OurGuards';
import Pricing from './myComponents/Pricing';
import Services from './myComponents/Services';

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Pricing/>
    <Services/>
    <OurGuards/>
    <Blog/>
    <Accrediation/>
    <Footer/>
    </>
  );
}

export default App;
