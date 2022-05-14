import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faAtom, faKeyboard} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
    <div id="services" class="services">
        <h1 class="py-5">What I'm Currently Working On</h1>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                    <div class="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                        <h3>Spotify Stores</h3>
                        <p>The current main side project I am working on is creating a website that, using Spotify's API, will let users lean more about their listnening habits in an interactive way.</p>
                    </div>
                </div>
                {/* - */}
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                        <div class="circle"><FontAwesomeIcon className="icon" icon={faAtom} size="2x"/></div>
                        <h3>Machine Learning</h3>
                        <p>The topic of machine learning is amazing to me and something I've wanted to study since starting CS. I am currently taking a course on it, and have plans for some projects.</p>
                    </div>
                </div>
                {/* - */}
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                        <div class="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                        <h3>Web Development</h3>
                        <p>Developing websites is both fun, and an important skill to have. Having finished this website, I am looking forward to my next project, and learning more about the field.</p>
                    </div>
                </div>
                {/* - */}
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                        <div class="circle"><FontAwesomeIcon className="icon" icon={faKeyboard} size="2x"/></div>
                        <h3>Go</h3>
                        <p>I have selected Go as the next language I would like to learn. It will be helpful to know for some of the projects I want to work on, and will also help my web development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services
