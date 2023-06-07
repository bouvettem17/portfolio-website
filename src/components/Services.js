import React from "react"; import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faAtom, faKeyboard} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
    <div id="services" class="services">
        <h1 class="py-5">What I'm Currently Working On</h1>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                        <div class="circle"><FontAwesomeIcon className="icon" icon={faKeyboard} size="2x"/></div>
                        <h3>Quantitative Finance</h3>
                        <p>I am currently reseraching quantitative finance as it is a great combination of both my background in mathematics and comptuer science, and my passion for finance.</p>
                    </div>
                </div>
                {/* - */}
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                        <div class="circle"><FontAwesomeIcon className="icon" icon={faAtom} size="2x"/></div>
                        <h3>Machine Learning</h3>
                        <p>The concept of machine learning is amazing to me and something I've wanted to study since starting CS. I am currently taking a course on it, and have plans for some projects.</p>
                    </div>
                </div>
                {/* - */}
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                    <div class="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                        <h3>Spotify Stories</h3>
                        <p>The current main side project I am working on is creating a website that, using Spotify's API, will let users lean more about their listnening habits in an interactive way.</p>
                    </div>
                </div>
                {/* - */}
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="box">
                        <div class="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                        <h3>Web3 Development</h3>
                        <p>There is no denying that the future is in Web3 and blockchain technologies. As a result I am dedicating time to learning about both to be ahead of the curve.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services
