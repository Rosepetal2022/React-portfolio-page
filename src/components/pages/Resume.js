import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { TabTitle } from '../../utils/helpers';
import resume from '../../assets/resume/Rachel_Spears_Resume.pdf'

const Resume = () => {
    TabTitle('Resume')
    return (
        <>
            <div className='main-resume-div'>
            <div className="resume-button-div font">
            <button className="resume-button">
                <a href={resume} className="text-light button-text">View My Resume</a>
            </button>
            </div>
            </div>
            <div className="front-end-skills">
                    <h1 className="font-second">Front End Skills</h1>
                        <div className="row">
                            <p className="col font">JavaScript</p>
                            <p className="col font">jQuery</p>
                            <p className="col font">React</p>
                            <p className="col font">Bootstrap</p>
                        </div>
                        <div className="row">
                            <p className="col font">HTML</p>
                            <p className="col font">CSS</p>
                            <p className="col font">WordPress</p>
                            <p className="col font">Divi</p>
                        </div>
                    </div>

                    <div className="back-end-skills">
                    <h1 className="font-second">Back End Skills</h1>
                        <div className="row">
                            <p className="col font">Node.js</p>
                            <p className="col font">MongoDB</p>
                            <p className="col font">MYSQL</p>
                            <p className="col font">GraphQL</p>
                        </div>
                        <div className="row">
                            <p className="col font">Express</p>
                            <p className="col font">Inquirer</p>
                            <p className="col font">Insomia</p>
                            <p className="col font">Sandbox</p>
                        </div>
                    </div>
                   
                
        </>
    );
}


export default Resume;