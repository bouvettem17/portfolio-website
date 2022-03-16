import React from "react";
import Typed from "react-typed";
import MichaelBouvette from "./MichaelBouvetteResume.pdf"
import { Link } from "react-scroll"

const Header = () => {
    return (
        <div id="home" class="header-wrapper">
            <div class="main-info">
                <h1>Michael Bouvette</h1>
                <h1>Open Technology Consultant</h1>
                <Typed
                    className="typed-text"
                    strings={["Passionate", "Ambitious", "Creative", "Analytic", "Persistent"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="home-buttons">
                    <Link activeClass="active" smooth={true} spy={true} to="contacts" offset={-110} className="btn-main-offer" href="">Contact Me</Link>
                    <a className="btn-main-offer" href= {MichaelBouvette} download="Michael Bouvette Resume" target="_blank">View My Resume</a>
                </div>
            </div>
        </div>

    )
}

export default Header
