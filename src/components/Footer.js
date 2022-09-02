import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className="footer" id="horaires-footer">
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
            <div className="adresse"> <h4>Adresse du salon de coiffure</h4>
            <div>"L'Atelier d'Adeline"
                <br />
                160 Boulevard Jean Dugommier <br />
                N°36 - 06600 Antibes
                </div><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1445.135745180162!2d7.1216689476253165!3d43.58006109861859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd56f4f66cf67%3A0x3504d002cb213ee1!2sDESSANGE%20-%20Coiffeur%20Antibes!5e0!3m2!1sfr!2sfr!4v1650576343891!5m2!1sfr!2sfr"  title="localisationSalon" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="localisationSalon"></iframe>
                <br />
                <div><h4>Accessibilité</h4>
                <div>Parking privatif - arrêt de bus : A1, A7, B5</div></div></div>
            <div className="contact-direct"><h4>Contacter le salon</h4>
            <div class="footerLinks"><a href="https://www.instagram.com/">via Instagram</a>
        <a href="https://www.facebook.com/">via Facebook</a>
        <a href="tel:3949">via Téléphone</a>
        <a href="mailto: adelinecoiffure@gmail.com">via Email</a>
        <a href="/contact">via Formulaire de contact</a></div></div>
        </div>
        <div className="mentions-droits">Mentions légales - L'Atelier d'Adeline® Tous droits réservés - SIREN 0405040504 </div>
    </div>
  )
}

export default Footer