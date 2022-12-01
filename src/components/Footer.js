import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {

    return (
        <>
        <nav class="navbar fixed-bottom footer-div">
            <div class="container-fluid">
                <div>
                <a href="https://github.com/Rosepetal2022" className="github-anchor"><i className="devicon-github-original-wordmark colored"></i></a>
                <a href="mailto:marcotter25@yahoo.com"><img className="url-link" alt="" src="images/email.png"></img></a>
                <a href="https://www.linkedin.com/in/rachel-spears-05606888/"><img className="url-link" alt="" src="images/linkedin.png"></img></a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Footer;