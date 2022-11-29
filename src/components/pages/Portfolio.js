import React, { useState } from 'react'
import { TabTitle } from '../../utils/helpers';
import '../../style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
    TabTitle('Portfolio');

    const [porjects] = useState([
        {
            name: 'Xdream',
            link: 'https://nameless-falls-05978.herokuapp.com/',
            repo: 'https://github.com/llacourciere/Xdream',
            description: 'This was a group project. It is a website that lets users write down and share their dreams.',
            languages: 'JavaScript, HTML, CSS, Bootstrap, Node.js, Handlebars, MySQL, Sequelize'
        },
        {
            name: 'The Tech Blog',
            link: 'https://polar-coast-64539.herokuapp.com/',
            repo: 'https://github.com/Rosepetal2022/tech_blog',
            description: 'A CMS style blog that lets users make posts about tech news as well as comment on posts.',
            languages: 'Node.js, Express, Handlebars, Bootstrap, Javascript, MySQL, Sequelize'
        },
        {
            name: 'Weather Dashboard',
            link: 'https://rosepetal2022.github.io/Weather_Dashboard/',
            repo: 'https://github.com/Rosepetal2022/Weather_Dashboard',
            description: 'A weather app using open Weather API that allows users to search for the weather in any location and saves your past searches.',
            languages: 'Javascript, HTML, CSS, Bootstrap'
        },
        {
            name: 'Team Profile Generator',
            link: 'https://rosepetal2022.github.io/Team_Profile_Generator/',
            repo: 'https://github.com/Rosepetal2022/Team_Profile_Generator',
            description: 'An app to create an HTML webpage that displays summaries of each employee at a software engineering team.',
            languages: 'Javascript, HTML, Bootstrap, inquirer, jest'
        }
    ])
    return (
        <>

            <h1 className="text-center">Portfolio</h1>
            {porjects.map((project, i) => (
                <div className="projects" key={i}>
                    <div>
                        <Container>
                            <Row>
                                <Col>{project.name}</Col>
                                <Col>{project.description}</Col>
                                <Col><a href={project.repo}>Github</a></Col>
                                <Col><a href={project.link}>heroku</a></Col>
                            </Row>
                        </Container>
                    </div>
                </div>

            ))}
        </>

    );
}

export default Portfolio;