import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import PortfolioDetails from "./components/PortfolioDetails";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  return (
    <>
        <ParticlesComponent/>
        <Navbar/>
        <Header/>
        <AboutMe/> 
        <Services/>
        <Portfolio/>
        <PortfolioDetails/>
        <Experience/>    
        <Contacts/>
        <Footer/>
    </>
  );
}

export default App;
