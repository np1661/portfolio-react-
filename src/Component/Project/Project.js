import React from 'react'
import { Element } from 'react-scroll';
import Projects from '../Projects_items';
import Projectcard from '../Projectcard/Projectcard';
import "./project.css"

const Project = () => {
  return (
    <Element id="project" className="project__container">
        <h1>Projects</h1>
        <div className="container project__box">
            {
                Projects.map((project,index) => (
                    <Projectcard key={index} img={project.img} prj_title={project.prj_title} prj_lang={project.prj_lang} prj_desc={project.prj_desc} prj_link={project.prj_link} prj_link2={project.prj_link2}/>
                ))
            }
        </div>
    </Element>
  )
}

export default Project