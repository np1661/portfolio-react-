import React from 'react';
import { Element, Link } from 'react-scroll';
import img from "../Images/photo.jpg";
import "./about.css";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <Element id='about' className="aboutContainer">
        <div className="aboutContainer__left">
          <h1>Hi, I'm <span>Nellaiappan V</span></h1>
          <p>Front-End Developer</p>
          <div className="aboutContainer__btn">
            <a href="https://drive.google.com/file/d/1uA-bF9lD3EdAoFg74_6_Nk138tRcZV1L/view?usp=sharing" target='blank'><button className="btn">Download CV</button></a>
            <Link to='contact'><button className="btn">Contact Me</button></Link>
          </div>
          <div className="aboutContainer__icon">
            <a href='mailto:nellai1661@gmail.com' target='blank'><MailIcon style={{fontSize:"30px", color:"white"}}/></a>
            <a href='https://github.com/np1661' target='blank'><GitHubIcon style={{fontSize:"30px", color:"white"}}/></a>
            <a href='https://www.linkedin.com/in/nellaiappanv1661/' target='blank'><LinkedInIcon style={{fontSize:"30px", color:"white"}}/></a>
          </div>
        </div>
        <div className="aboutContainer__right">
            <img src={img} alt="img" className="img-responsive"/>
        </div>
        
        
    </Element>
  )
}

export default About