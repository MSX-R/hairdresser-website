import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/Logo/logo-blanc-or.png'



function Nav() {

    const [showLinks, setShowLinks]=useState(false);

    const handleShowLinks =() => {
        setShowLinks(!showLinks);
    }

console.log(showLinks) ; /* Pour verifier que ca passe bien de true a false */



  return (
      <div>
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
    <Link to="/">
        <img src={logo} alt="zzz" className="navbar_logo"/>
        </Link>
        
        <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
        
        <ul className="navbar_links">

            <li className="navbar_item slideInDown-1">
                <Link to="/accueil" className="navbar_link">Accueil</Link>
            </li>
            <li className="navbar_item slideInDown-2">
                <Link to="/le-salon" className="navbar_link">Le salon</Link>
            </li>
            <li className="navbar_item slideInDown-3">
                <Link to="/book-photo" className="navbar_link ">Notre  Book</Link>
            </li>
            <li className="navbar_item slideInDown-4">
            <Link to="/prestations" className="navbar_link ">Nos Prestations</Link>
            </li>
            <li className="navbar_item slideInDown-5">
            <Link to="/contact" className="navbar_link ">Contact</Link>
            </li>

        
        {/* <Link to="/contact" className="navbar_link btn-rdv">Prendre un rendez-vous</Link> */}
        <a href="https://www.planity.com/coiffeur/gp_8221e406cabc92bbf3dfb9d8f9f7bff3" className="navbar_link btn-rdv">Prendre un RDV en ligne</a></ul>
    </nav>
    </div>
  )
}


export default Nav

