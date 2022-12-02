import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { TabTitle } from '../../utils/helpers';

const Resume = () => {
    TabTitle('Resume')
    return (
        <>
            <div className='main-resume-div'>
                <h1 className="text-center text-light font-second">Resume</h1>
                <div className="container opening-resume-paragraph">
                    <div className="row flex-column font">
                        <p className="col">
                            I am currently attending a Full Stack Web Developer Bootcamp hosted by the University of Oregon and Trilogy Education.
                        </p>
                        <p className="col">I am a solution driven Web Developer adept at contributing to a highly collaborative work environment, finding
                            solutions and determining customer satisfaction. Proven experience developing customer-focused websites using HTML, CSS and
                            Javascript. Built projects for desktop and mobile users.
                        </p>
                        <button className="resume-button">
                            <a href='https://docs.google.com/document/d/1B4Ia-ggziD8V7VtlVb4YiCihdMo0yHaAaJ6HZWdGAuw/edit?usp=sharing' className="text-light button-text">View My Resume</a>
                        </button>
                    </div>

                </div>
            </div>
            <div className="container resume-skills-div">
                <div className="row ">
                    <div className="col-6 col-sm-2">
                        <h3>Front End Skills</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>Variety of third party APIs</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-2">
                        <h3>Backend Skills</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDD</li>
                            <li>GraphQL</li>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Resume;