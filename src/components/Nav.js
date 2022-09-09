import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

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
    <NavLink to="/">
        <img src={logo} alt="zzz" className="navbar_logo"/>
        </NavLink>
        
        <button className="navbar_burger" onClick={handleShowNavLinks}>
            <span className="burger-bar"></span>
        </button>
        
        <ul className="navbar_NavLinks">

            <li className="navbar_item slideInDown-1">
                <NavLink href="/accueil" className="navbar_NavLink">Accueil</NavLink>
            </li>
            <li className="navbar_item slideInDown-2">
                <NavLink href="/le-salon" className="navbar_NavLink">Le salon</NavLink>
            </li>
            <li className="navbar_item slideInDown-3">
                <NavLink href="/book-photo" className="navbar_NavLink ">Notre  Book</NavLink>
            </li>
            <li className="navbar_item slideInDown-4">
            <NavLink href="/prestations" className="navbar_NavLink ">Nos Prestations</NavLink>
            </li>
            <li className="navbar_item slideInDown-5">
            <NavLink href="/contact" className="navbar_NavLink ">Contact</NavLink>
            </li>

        
        {/* <Link to="/contact" className="navbar_link btn-rdv">Prendre un rendez-vous</Link> */}
        <a href="https://www.planity.com/coiffeur/gp_8221e406cabc92bbf3dfb9d8f9f7bff3" className="navbar_link btn-rdv">Prendre un RDV en ligne</a></ul>
    </nav>
    </div>
  )
}


export default Nav

