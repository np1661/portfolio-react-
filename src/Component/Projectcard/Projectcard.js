import React from 'react';
import "./projectcard.css";

const Projectcard = ({img,prj_title,prj_lang,prj_desc,prj_link,prj_link2}) => {
  return (
    <div class="card project__card" style={{width:"350px"}}>
        <img class="card-img-top" src={img} alt="temp" />
        <div class="card-body card__text">
            <h4 class="card-title">{prj_title}</h4>
            <h5>{prj_lang}</h5>
            <p class="card-text">{prj_desc}</p>
            <div className="lk_btn">
                <a href={prj_link} target='blank' class="btn btn-primary">Open website</a>
                <a href={prj_link2} target='blank' class="btn btn-primary">Open source Code</a>
            </div>
        </div>
    </div>
  )
}

export default Projectcard