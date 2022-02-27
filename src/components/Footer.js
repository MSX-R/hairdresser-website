import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className="footer">
        <div className="bloc-infospratiques">
            <div className="horaires">
                <h4>Horaires</h4>
                

                <div className="bloc-horaires">
                    <div className="days">
                        <div>Lundi</div>
                        <div>Mardi</div>
                        <div>Mercredi</div>
                        <div>Jeudi</div>
                        <div>Vendredi</div>
                        <div>Samedi</div>
                        <div>Dimanche</div>
                    </div>
                    <div className="horairesjour">
                        <div>08H-13H</div>
                        <div>08H-13H</div>
                        <div>08H-13H</div>
                        <div>08H-13H</div>
                        <div>08H-13H</div>
                        <div>10H-14H</div>
                        <div>FERME</div>
                    </div>
                    <div className="horairesjour">
                        <div>15H-21H</div>
                        <div>15H-21H</div>
                        <div>15H-21H</div>
                        <div>15H-21H</div>
                        <div>15H-18H</div>
                        <div>FERME</div>
                        <div>FERME</div>

                    </div>
                </div>
                

            </div>
            <div className="adresse">LOCALISATION</div>
            <div className="contact-direct">NOUS CONTACTER</div>
        </div>
        <div className="mentions-droits">Mentions légales - Adeline Coiffure ® Tout droits réservés - SIREN 0405040504 </div>
    </div>
  )
}

export default Footer