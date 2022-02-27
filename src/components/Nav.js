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
        <ul className="navbar_links">

            <li className="navbar_item slideInDown-1">
                <a href="/home" className="navbar_link">Accueil</a>
            </li>
            <li className="navbar_item slideInDown-2">
                <a href="/le-salon" className="navbar_link">Le salon</a>
            </li>
            <li className="navbar_item slideInDown-3">
                <a href="/book" className="navbar_link ">Book</a>
            </li>
            <li className="navbar_item slideInDown-4">
            <a href="/prestations" className="navbar_link ">Prestations</a>
            </li>
            <li className="navbar_item slideInDown-5">
            <a href="/contact" className="navbar_link ">Contact</a>
            </li>

        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
        {/* <Link to="/contact" className="navbar_link btn-rdv">Prendre un rendez-vous</Link> */}
        <a href="tel:3949" className="navbar_link btn-rdv">Réservation par téléphone</a>
    </nav>
    </div>
  )
}


export default Nav

