import './Projects.css';
import Card from '../Card/Card';
import ecom from '../../assets/ecom.png';

const Projects = () => {

  return (
    <div id="projects">
      <h1 id="para">EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        
        <Card title="E-COMMERCE WEBSITE" image={ecom}></Card> 
        <a href="forever03.netlify.app">Visit </a>
        
        <Card title="CALCULATOR" image={ecom}  />
        <a href="https://calcsanju.netlify.app">Visit </a>

        <Card title="TIC TAC TOE" image={ecom}  />
        <a href="https://crossesandcircles.netlify.app">Visit </a>

        <Card title="CHATBOT" image={ecom}  />
        <a href="www.google.com">Visit </a>

        <Card title="EXPENSE TRACKER" image={ecom}  />
        <a href="www.google.com">Visit </a>


      </div>
    </div>
  );
};

export default Projects;
