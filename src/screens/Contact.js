import React from 'react'
import './Contact.css'
import Formulaire from '../components/Formulaire'
import Nav from '../components/Nav'
// 
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/insta.png'
import Whatsapp from '../assets/whatsapp.png'

// 

function Contact() {
  return (
    <div>
      <Nav />
<div className="main">
        <h1>Vous souhaitez nous contacter ?</h1>
        <p>N'hésitez plus et contacter nous dès aujourd'hui ! Un de nos coiffeurs se fera le plaisir de répondre à votre demande.</p>
        <p>Si vous souhaitez un soin capillaire, sachez que vous pouvez prendre réservation par téléphone ou bien en remplissant le formulaire ci-contre.</p>
        
        <Formulaire />

        <p id="a-savoir-contact"><u>A savoir :</u> Nous proposons des prestations sans RDV tous les matins de 9h à 12h30.</p>
        
        <h3>Vous souhaitez nous suivre sur les réseaux ? </h3>
        <p>Rejoignez-nous et suivez notre compte pour être tenu au courant des dernieres nouvelles du salon, de nos mises à jour concernant la galerie, de nos offres exceptionnelles et bien d'autres choses.. </p>

        <div className="icones-reseaux">
<img src={Instagram} alt="Instagram" className="insta" />
<img src={Facebook} alt="Facebook" className="facebook" />
<img src={Whatsapp} alt="Whatsapp" className="whatsapp" />
        </div>

        
      </div>
      </div>
  )
}

export default Contact