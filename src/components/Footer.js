import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {

    return (
        <>
        <nav class="navbar fixed-bottom footer-div">
            <div class="container-fluid">
                <div className="footer-icon-div">
                <a href="https://github.com/Rosepetal2022"><i class="devicon-github-original colored"></i></a>
                <a href="mailto:marcotter25@yahoo.com"><img className="footer-link" alt="" src={require("../assets/images/email.png")}></img></a>
                <a href="https://www.linkedin.com/in/rachel-spears-05606888/"><img className="footer-link" alt="" src={require("../assets/images/linkedin.png")}></img></a>
                </div>
                <div>
                <p className="font-second">&copy; Rachel Spears 2022</p>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Footer;