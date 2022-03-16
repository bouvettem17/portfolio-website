import React from "react"
import houston from "../images/houstonreu.PNG";
import apollodash from "../images/apollodash.PNG"
import originalrogue from "../images/originalrogue.png"
// FONT AWESOME IMPORTS //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//REACT POPUP BOX //

import { Link } from "react-scroll"

const Portfolio = () => {

    function handleClickHouston(e) {
        document.getElementById("houston").style.display='block';
        document.getElementById("apollocare").style.display='none';
        document.getElementById("rogue").style.display='none';
    }

    function handleClickApollo(e) {
        document.getElementById("houston").style.display='none';
        document.getElementById("apollocare").style.display='block';
        document.getElementById("rogue").style.display='none';
    }

    function handleClickRogue(e) {
        document.getElementById("houston").style.display='none';
        document.getElementById("apollocare").style.display='none';
        document.getElementById("rogue").style.display='block';
    }

 

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <span className="subheading ">PROJECTS</span>
            <span className = "subheading2">Please Click a Thumbnail to Learn More About the Project</span>
            <div className="work-grid">
                <div className="parent">
                    <div className="child" style={{backgroundImage: `url(${houston})`}} >
                        <Link smooth={true} to = "houston" className = "project-link" onClick={ handleClickHouston } offset={-70} href="#">Houston REU Project</Link>
                    </div>
                </div>
                <div className="parent">
                    <div className="child" style={{backgroundImage: `url(${apollodash})`}}>
                        <Link smooth={true} to = "apollocare" className = "project-link" onClick={ handleClickApollo } offset={-70} href="#">Apollocare Web App</Link>
                    </div>
                </div>
                <div className="parent">
                    <div className="child"  style={{backgroundImage: `url(${originalrogue})`}}>
                        <Link smooth={true} to = "rogue" className = "project-link" onClick={ handleClickRogue } offset={-70} href="#">Rogue Game in C</Link>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default Portfolio
