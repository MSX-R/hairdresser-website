import React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom';

// import logoTransp from '../assets/logo-transp.png'
import logoTransp from '../assets/Logo/logo-blanc-or.png'


function WelcomePage() {
  return (
    <div className="page-welcome">
      <Link to="/authentification" className="WelcomeConnexion">Connexion</Link>
        <div className="top-welcome"></div>
        
        <Link to="/home">
          <div className="AdelineCoiffureLogo" title="Cliquez pour entrer sur le site">
            {/* Adeline */}
          <img src={logoTransp} alt="logo transparent" className="logo-welcome-page" />
          
<div className="nom-entreprise-logo">L'ATELIER D'ADELINE
</div>

<div className="ville-logo">- Antibes -</div>

</div></Link>
 <div className="bottom-welcome"></div>


    </div>
  )
}

export default WelcomePage