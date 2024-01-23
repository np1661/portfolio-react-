import React from 'react'
import { Element } from 'react-scroll';
import "./education.css";

const Education = () => {
  return (
    <Element id="education" className="education__container">
        <h1>Education</h1>
        <div className="education__area">
            <div className="education__box">
                <h2>Bannari Amman Institute of Technology</h2>
                <h4>2019-2023 | B.E-Information Science and Engineering</h4>
                <p>Cgpa : 8.74</p>
            </div>

            <div className="education__box">
                <h2>Maharishi Vidya Mandir(CBSE)</h2>
                <h4>2018 - 2019 | Grade 12</h4>
                <p>Percentage : 68.6%</p>
            </div>

            <div className="education__box">
                <h2>Litera Valley Zee School(CBSE)</h2>
                <h4>2016 - 2017 | grade 10</h4>
                <p>Cgpa : 9.4</p>
            </div>
        </div>
        
    </Element>
  )
}

export default Education