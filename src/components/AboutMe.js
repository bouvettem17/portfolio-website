import React from "react";
import author from "../images/grad-photo.jpeg"

const AboutMe = () => {
    return (
        <div className = "about">
            <div id="about" className="container py-5">
                <div class="row">
                    <div class="col-lg-6 col-xm-12">
                        <div class="photo-wrap mb-5">
                            <img className = "profile-img" src={author} alt="author"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xm-12">
                        <h1 className = "about-heading">About Me</h1>
                        <p>
                        I graduated from Indiana University with Distinction as a double major in Computer Science and Matehmtatics and
                        I am currently a Software Engineer at Amazon working for the Inbound Predictions Network Balancing team. 
                        I have a huge interest in technology and have overcome many obstacles in life and have done my best to learn 
                        from my failures and hardships to develop as a person. I have a strong ability to perform under pressure, love for learning, large curiousity,
                        and I strive to perform beyond expectations in everything I do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
