import React from 'react'
import { Element } from 'react-scroll';
import "./contact.css";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./contact.css";

const Contact = () => {
  return (
    <Element id="contact" className="contactcontainer">
        <h1>Contact</h1>
        <div className="contact__area">
            <div className="contact__box">
                <h2>Email</h2>
                <h4>nellai1661@gmail.com</h4>
            </div>

            <div className="contact__box">
                <h2>GitHub</h2>
                <h4>github.com/np1661</h4>
            </div>

            <div className="contact__box">
                <h2>LinkedIn</h2>
                <h4>linkedin.com/in/nellaiappanv1661/</h4>
            </div>
        </div> 

        <div className="contact__infobottom">
                <a href='mailto:nellai1661@gmail.com' target='blank'><MailIcon style={{fontSize:"30px"}}/></a>
                <a href='https://github.com/np1661' target='blank'><GitHubIcon style={{fontSize:"30px"}}/></a>
                <a href='https://www.linkedin.com/in/nellaiappanv1661/' target='blank'><LinkedInIcon style={{fontSize:"30px"}}/></a>
            </div>    
    </Element>
  )
}



export default Contact