import React from "react"

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-4">
                <h1>college experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2018</h3>
                        <p>
                            <ul>
                                <li><b>Summer</b> - Graduated from Saint Xavier High School in Louisville, KY and worked as a lifeguard </li><br/>
                                <li><b>Fall</b> - Started at Indiana University Bloomington's Kelley School of Business as a double major in mathematics and finance</li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2019</h3>
                        <p>
                            <ul>
                                <li><b>Spring</b> - Took first college CS Course(Racket), studied linear algebra and economics </li><br />
                                <li><b>Summer</b> - Interned as an administrative assistant intern in Louisville, KY and continued work as a lifeguard </li><br />
                                <li><b>Fall</b> - Switched to double major in computer Science and mathematics, studied object-oriented programming (Java), multivariable calculus, and differential equations. Worked as a TA for finite mathematics and developed a following online as I
                            began my side job as a professional video game player and streamer</li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <p>
                            <ul>
                                <li><b>Spring</b> - Finished differential equations and multivariable calculus. Studied datastructures (Java) and advanced algorithms (Java). TA'd for introductory calculus </li><br />
                                <li><b>Summer</b> - Spent the summer streaming, making videos, and competing as a professional video game player while lifeguarding on the side</li><br />
                                <li><b>Fall</b> - Began studying probablity theory, data analysis and mining (RStudio), cybersecurity mathematics, and learned my third programming language (C). Joined the Indiana University Waterski and Wakeboard team </li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-2021</h3>
                        <p>
                            <ul>
                                <li><b>Spring</b> - Finished probablity theory course sequence, studied algorithm design and analysis as well as mobile app development in iOS, TA'd for cybersecurity mathematics </li><br />
                                <li><b>Summer</b> - REU Internship within The University of Houston Computer Science School in their Computational Physiology Lab (Python3)</li><br />
                                <li><b>Fall</b>   - Studied database concepts (SQL) and mathematical analysis. Developed a healthcare web-app (React and NodeJS) in my software engineering for information systems course</li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021-2022</h3>
                        <p>
                            <ul>
                                <li><b>Spring</b> - Studied machine learning (Python3), object-oriented software methods(Java), distributed systems (Python3), and complex variables with applications. Taught myself web development and working on personal projects in my free time</li><br />
                                <li><b>Summer</b> - Graduated from IU with Distinction. Started as a Open Technology Consultant at Credera </li><br />
                                <li><b>Fall</b> - TBD </li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
