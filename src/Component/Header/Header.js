import React from 'react';
import "./header.css";
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <nav className="navbar navbar-default navbar__container">
        <div className="container-fluid">
            
            <div className="navbar-header  navbar__left">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to='/'>
                    <h1 className="navbar__logo">Portfol<span>io</span></h1>
                </Link>
            </div>

            <div className="collapse navbar-collapse navbar__right" id="collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='skills'>Skills</Link></li>
                    <li><Link to='education'>Education</Link></li>
                    <li><Link to='project'>Projects</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </div>


        </div>
    </nav>
  )
}

export default Header