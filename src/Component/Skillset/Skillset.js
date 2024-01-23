import React from 'react';
import { Element } from 'react-scroll';
import { LinearProgress } from '@mui/material';
import "./skillset.css";

const Skillset = () => {
  return (
    <Element id="skills" className="skillset__container">
        <div className="skillset__box container"> 
            <h1>Skill Set</h1>
            <div className="skillset__items"> 
                <div className="skillset__skills">
                    <p>HTML</p>
                    <div className="skillset__slider">
                        <LinearProgress variant="determinate" value={90} />
                    </div>
                </div>
                <div className="skillset__skills">
                    <p>CSS</p>
                    <div className="skillset__slider">
                        <LinearProgress variant="determinate" value={85} />
                    </div>
                </div>
                <div className="skillset__skills">
                    <p>Bootstrap</p>
                    <div className="skillset__slider">
                        <LinearProgress variant="determinate" value={80} />
                    </div>
                </div>
                <div className="skillset__skills">
                    <p>JavaScript</p>
                    <div className="skillset__slider">
                        <LinearProgress variant="determinate" value={80} />
                    </div>
                </div>
                <div className="skillset__skills">
                    <p>React JS</p>
                    <div className="skillset__slider">
                        <LinearProgress variant="determinate" value={90} />
                    </div>
                </div>
            </div>
        </div>
        
    </Element>
  )
}

export default Skillset