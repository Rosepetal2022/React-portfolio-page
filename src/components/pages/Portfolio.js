import { TabTitle } from '../../utils/helpers';
import '../../style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';



const Portfolio = () => {
    TabTitle('Portfolio');
    const projects = [
        {
            name: 'Xdream',
            link: 'https://nameless-falls-05978.herokuapp.com/',
            repo: 'https://github.com/llacourciere/Xdream',
            description: 'This was a group project. It is a website that lets users write down and share their dreams.',
            languages: 'JavaScript, HTML, CSS, Bootstrap, Node.js, Handlebars, MySQL, Sequelize'
        },
        {
            name: 'Get Flix and Chill',
            link: 'https://apatheticjedi.github.io/get-flix-and-chill/',
            repo: 'https://github.com/apatheticjedi/get-flix-and-chill',
            description: 'The purpose of this app was to create a page that will pair a randomized movie with a cannabis strain. This was a group project using The Movie Database and Otreeba Open Cannabis API',
            languages: 'HTML, CSS, Javascript, jQuery, MD Bootstrap'
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
            link: 'https://polar-coast-64539.herokuapp.com/',
            repo: 'https://github.com/Rosepetal2022/Team_Profile_Generator',
            description: 'A CMS style blog that lets users make posts about tech news as well as comment on posts.',
            languages: 'Node.js, Express, Handlebars, Bootstrap, Javascript, MySQL, Sequelize'
        },
        {
            name: 'Coding Quiz',
            link: ' https://rosepetal2022.github.io/Quiz_Game/',
            repo: 'https://github.com/Rosepetal2022/Quiz_Game',
            description: 'A quiz game on Javascript fundementals, with persistent high scores and a timer.',
            languages: 'Javascript, HTML, CSS'
        }
    ]
    return (
        <>
            <div className="portfolio-main-div">
                <h1 className="text-center font-second">Portfolio</h1>
                <div className="container">
                    <div className="row justify-content-evenly">
                        {projects.map((project, i) => (
                            <Card className="custom-card">
                                <div className="custom-card-image">
                                    <Card.Img className="inside-card-image" variant="top" src={require(`../../assets/portfolio_images/${i}.png`)} alt={project.name} />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title className="font-second">{project.name}</Card.Title>
                                    <Card.Text className="font">
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <a href={project.repo} className="github-anchor"><i className="devicon-github-original-wordmark colored"></i></a>
                                    <a href={project.link} className="link-anchor"><img className="url-link" alt="" src={require("../../assets/images/link.png")}></img></a>
                                </Card.Footer>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Portfolio;