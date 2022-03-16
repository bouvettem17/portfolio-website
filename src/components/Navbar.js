import React from "react"
import logo from "../letter_m.png";
import { Link } from "react-scroll"
// React Font Awesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link activeClass="active" smooth={true} spy={true} to="home" className="nav-link" href="#" offset={-250}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth={true} spy={true} to="about" offset={-200} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth={true} spy={true} to="services" offset={-300} className="nav-link" href="#">Interests</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth={true} spy={true} to="portfolio" offset={-250} className="nav-link" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth={true} spy={true} to="experience" offset={-200} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth={true} spy={true} to="contacts" offset={-110} className="nav-link" href="">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}



export default Navbar

