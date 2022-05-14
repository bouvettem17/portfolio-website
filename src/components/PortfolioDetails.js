import React from 'react'
import houstonlogo from "../images/houstonlogo.png"
import houstonaward from "../images/houstonaward.png"
import apollodash from "../images/apollodash.PNG"
import apollologo from "../images/apollologo.PNG"
import roguescreenshot from "../images/Rogue_Screenshot.png"
import roguelogo from "../images/roguelogo.png"
import spotifyStoriesHome from "../images/spotify-stories-home.png"
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

const PortfolioDetails = () => {
    return (
        <div class="container">
            <section id="houston" className="portfolio-details" >
                <div className="img-header" style={{ backgroundImage: `url(${houstonaward})` }}></div>
                <div class="portfoliodetails-wrapper">
                    <div class="portfolio-header">
                        <img src={houstonlogo} alt className="portfolio-company-logo"></img>
                        <span className="project-title">HOUSTON REU PROJECT</span>
                    </div>
                    <p>
                        In Summer 2020 I took place in a virtual REU internship in the Computational Physiology Lab at the University of Houston. My task was to research how we could change acceleration curves
                        in autonomous vehicles in order to make the experience for accelerophobic passengers more enjoyable. I worked alongside professor Ioannis Pavlidis and masters student Huynh Tung on the project.
                        Using an algorithm developed by Mr. Tung which classified a driver into different accelerophobic groupings, I implemented a solution in Python3 which used linear interpolation to
                        lessen the acceleration impact on the drivers based on when their stress levels exceeded a certain threshold. <br />
                        <br />
                        For this algorithm and research I was awarded the third best presentation at the end of the REU Program.<br />
                        <br />
                        <a href="https://github.com/mjbouvet/REU-Summer-Project" target="_blank"><b>Project Github</b></a>
                    </p>
                </div>
            </section>
            <section id="apollocare" className="portfolio-details">
                <div className="img-header" style={{ backgroundImage: `url(${apollodash})` }} ></div>
                <div class="portfoliodetails-wrapper">
                    <div class="portfolio-header">
                        <img src={apollologo} alt className="portfolio-company-logo"></img>
                        <span className="project-title">APOLLOCARE WEB APP</span>
                    </div>
                    <p>
                        The unprecedented times we are in, because of the current pandemic, really show the necessity for clear and concise healthcare systems in order to be as efficient as and streamlined as possible. This project
                        seeks to be a system that can be used by doctors, patients, and insurance providers (IPs) to provide necessary services essential to making healthcare easy and effective. The project itself is a web app that
                        provides three view for each of the three respevtive parties. Each view gives its user access to individualized options and features made specifically for the need of each user type. The app seeks
                        to make the doctor's job easier by giving them access to patient information, the patients' lives easier by allowing them to easily schedule appointment with doctors and provide reassurance that their
                        doctors are doing what they need to be doing, and give the IPs the ability to provide deals to patients needing policies. The overall purpose is to make healtcare, with specific regard to Covid-19, easier for the doctors,
                        and more managable and understandable to the patients and insurance providers.<br />
                        <br />
                        This was a website I co-develop with three other students in my software engineering for information systems course. The task was to create a healthcare web app that allowed
                        doctors, patients, and insurance companies to all be able to perform necessary communications between each other. Patients are able to book appointments with doctors
                        who are then given access to the patients information. Insurance companies are able register and add plans that are then visible and recommended to the patients on their own dashboards.<br />
                        <br />
                        <a href="https://github.com/EthanBehar68/P565-465-PatientHealthInsuranceManagementSystem-FrontEnd/tree/development" target="_blank"><b>Front End Github</b></a>
                        <a href="https://github.com/jackjoliet/P565-465-PatientHealthInsuranceManagementSystem/tree/Development" target="_blank"><b>Back End Github</b></a>
                    </p>
                </div>
            </section>
            <section id="rogue" className="portfolio-details" >
                <div className="img-header" style={{ backgroundImage: `url(${roguescreenshot})` }}></div>
                <div class="portfoliodetails-wrapper">
                    <div class="portfolio-header">
                        <img src={roguelogo} alt className="portfolio-company-logo"></img>
                        <span className="project-title">ROGUE GAME IN C</span>
                    </div>
                    <p>
                        My final project for my programming in C and Unix course was recreating the old-time video game rogue. Over the course of three weeks I progressively developed the game to have
                        multiple different floors, levels, and tasks to complete. I also added save functionality in which you can save your games to a predesignated file in order to continue
                        playing later regardless of shutting down the application or not. This was my first time coding a larger product in C and the development process really taught me a lot about the language.<br />
                        <br />
                        <a href="https://github.com/mjbouvet/C291-Fall1-2019/tree/milestone_3" target="_blank"><b>Project Github</b></a>
                    </p>
                </div>
            </section>
            <section id="spotify" className="portfolio-details" >
                <div className="img-header" style={{ backgroundImage: `url(${spotifyStoriesHome})` }}></div>
                <div class="portfoliodetails-wrapper">
                    <div class="portfolio-header">
                        <LibraryMusicIcon className="spotify-logo" />
                        <span className="project-title">SPOTIFY STORIES</span>
                    </div>
                    <p>
                        Spotify Stories is a webapp that utilizes Spotify’s API, React, and Go to let users learn about their listening habits. Currently the website allows a user to login with their Spotify
                        Account and will display to them their top 30 tracks from the last month, last 6 months, and since the beginning of their spotify app. Future functionality will include a feature in which
                        the website will reveal their listening history and habits in a story-like format using animation. Go will be implemented as the backend langauge as a means to store user data and be able to
                        show a user how their habits are changing in depth.<br />
                        <br />
                        <a href="https://bouvettem17.github.io/spotify-stories" target="_blank"><b>Website</b></a>
                        <a href="https://github.com/bouvettem17/spotify-stories/tree/master" target="_blank"><b>Project Github</b></a>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default PortfolioDetails
