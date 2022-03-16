import React from "react";
import author from "../Myself.PNG"

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
                        I recently graduated from Indiana University with Distinction as a dobule major in Computer Science and Matehmtatics,
                        I am currently a Open Technology Consultant at Credera's Denver Office. I have held multiple different job positions
                        and, on top of this, have overcome many large obstacles in life and have done my best to learn 
                        from my failures and hardships to develop as a person. I have an ability to perform under pressure 
                        and stress that can not be paralleled, and I am willing to work well beyond expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
