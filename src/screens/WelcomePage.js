import React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom';

import logoTransp from '../assets/logo-transp.png'

function WelcomePage() {
  return (
    <div className="page-welcome">
        <div className="top-welcome"></div>
        <Link to="/home"><div className="AdelineCoiffureLogo" title="Cliquez pour entrer sur le site">Adeline<img src={logoTransp} alt="logo transparent" className="logo-welcome-page" />
Coiffure</div></Link>
 <div className="bottom-welcome"></div>
    </div>
  )
}

export default WelcomePage