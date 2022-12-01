import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { TabTitle } from '../../utils/helpers';

const About = () => {
    TabTitle('About');
    return (
        <>
        <div className="main-about-div">
            <h1 className="text-center">About</h1>
            <div className="top-about-div container col-6">
               <p className="about-paragraph mt-4"> I am currently attending a Full Stack Web Developer program by the University of Oregon and Trilogy Education. I am a hard working individual with a determined attitude. My background includes skill in managing, teaching and sales.</p>
            </div>
        </div>
         <div className="container">
         <p className="skills">Skilled in the use of</p>
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
     </>
    )
}

export default About;