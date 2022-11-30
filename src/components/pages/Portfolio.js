import { TabTitle } from '../../utils/helpers';
import '../../style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Portfolio = () => {
    TabTitle('Portfolio');

    const projects = [
        {
            name: 'Xdream',
            image: 'images/Xdream.png',
            link: 'https://nameless-falls-05978.herokuapp.com/',
            repo: 'https://github.com/llacourciere/Xdream',
            description: 'This was a group project. It is a website that lets users write down and share their dreams.',
            languages: 'JavaScript, HTML, CSS, Bootstrap, Node.js, Handlebars, MySQL, Sequelize'
        },
        {
            name: 'Get Flix and Chill',
            image: 'images/get-flix.png',
            link: 'https://apatheticjedi.github.io/get-flix-and-chill/',
            repo: 'https://github.com/apatheticjedi/get-flix-and-chill',
            description: 'The purpose of this app was to create a page that will pair a randomized movie with a cannabis strain. This was a group project using The Movie Database and Otreeba Open Cannabis API',
            languages: 'HTML, CSS, Javascript, jQuery, MD Bootstrap'
        },
        {
            name: 'The Tech Blog',
            image: 'images/tech_blog.png',
            link: 'https://polar-coast-64539.herokuapp.com/',
            repo: 'https://github.com/Rosepetal2022/tech_blog',
            description: 'A CMS style blog that lets users make posts about tech news as well as comment on posts.',
            languages: 'Node.js, Express, Handlebars, Bootstrap, Javascript, MySQL, Sequelize'
        },
        {
            name: 'Weather Dashboard',
            image: 'images/weather-dashboard.png',
            link: 'https://rosepetal2022.github.io/Weather_Dashboard/',
            repo: 'https://github.com/Rosepetal2022/Weather_Dashboard',
            description: 'A weather app using open Weather API that allows users to search for the weather in any location and saves your past searches.',
            languages: 'Javascript, HTML, CSS, Bootstrap'
        },
        {
            name: 'Team Profile Generator',
            image: 'images/team_profile_generator.png',
            link: 'https://polar-coast-64539.herokuapp.com/',
            repo: 'https://github.com/Rosepetal2022/Team_Profile_Generator',
            description: 'A CMS style blog that lets users make posts about tech news as well as comment on posts.',
            languages: 'Node.js, Express, Handlebars, Bootstrap, Javascript, MySQL, Sequelize'
        },
    ]
    return (
        <>
            <h1 className="text-center mt-4">Portfolio</h1>
            <Container>
                <Row>
                    {projects.map((project, i) => (
                        <Col>
                            <div className="projects" key={i}>
                                <div>
                                    <Card style={{ width: '25rem' }} className="custom-card col-12 mt-6">
                                        <div className="custom-card-image">
                                            <Card.Img variant="top" src={project.image} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>{project.name}</Card.Title>
                                            <Card.Text>
                                                {project.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-center">
                                            <a href={project.repo} className="github-anchor"><i className="devicon-github-original-wordmark colored"></i></a>
                                            <a href={project.link} className="link-anchor"><img className="url-link" alt="" src="images/link.png"></img></a>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    );
}

export default Portfolio;