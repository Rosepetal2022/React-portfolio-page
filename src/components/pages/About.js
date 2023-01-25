import React from 'react';
import resume from '../../assets/resume/Rachel_Spears_Resume.pdf'
import "bootstrap/dist/css/bootstrap.min.css";
import { TabTitle } from '../../utils/helpers';

const About = () => {
    TabTitle('About');
    return (
        <>
        <div className="hero-div">
            <div className="hero-image">
                <div className="hero-text font-second">
                    <h1>My name is Rachel</h1>
                    <h3>I am a Web Developer</h3>
                    <div className="resume-div">
                    <button className="about-resume-button">
                            <a href={resume} className="resume-button-text font-second">View My Resume</a>
                    </button>
                    </div>
                </div>
              
            </div>
           
        </div> 
        <div>
            <h1 className="font about-me">About Me</h1>
            <p className="about-paragraph font">
                I had a very succesful career as a Hunter/Jumper trainer in Portland, Oregon. My previous job in the horse industry gave me great skills in managment, sales, and teaching.
                I suffered a career ending injury that made me turn my sights towards full stack web development. I graduated a full stack coding bootcamp and I am now actively looking for my 
                next job in the tech industry. I am a hard worker and enjoy learning new things. I work well with others and would love to be a part of a company that would value my diverse skill set.
            </p>
        </div>   
        <div className="main-skills-container">
                <div className="skills-container">
                    <p className="skills font-second">Skilled in the use of</p>
                    <p className="row flex-wrap">
                        <i className="icon col devicon-javascript-plain"></i>
                        <i className="icon col devicon-html5-plain"></i>
                        <i className="icon col devicon-css3-plain"></i>
                        <i className="icon col devicon-bootstrap-plain"></i>
                        <i className="icon col devicon-react-original-wordmark"></i>
                        <i className="icon col devicon-mysql-plain"></i>
                        <i className="icon col devicon-mongodb-plain"></i>
                        <i className="icon col devicon-nodejs-plain"></i>
                        <i className="icon col devicon-express-original"></i>
                        <i className="icon col devicon-graphql-plain-wordmark"></i>
                    </p>
                </div>
        </div>

        </>
    )
}

export default About;