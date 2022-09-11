import React from "react";
import "./Contact.css";
import Formulaire from "../components/Formulaire";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
//
import Facebook from "../assets/SocialMedia/BlackGold/BG-fb.svg";
import Instagram from "../assets/SocialMedia/BlackGold/BG-insta.svg";
import Whatsapp from "../assets/SocialMedia/BlackGold/BG-tel.svg";
import Email from "../assets/SocialMedia/BlackGold/BG-mail.svg";

//

function Contact() {
  return (
    <div>
      <Nav />
      <div className="main withoutband">
        <h1>Vous souhaitez nous contacter ?</h1>
        <p>
          N'hésitez plus et contacter nous dès aujourd'hui ! Un de nos coiffeurs
          se fera le plaisir de répondre à votre demande.
        </p>
        <p>
          Si vous souhaitez un soin capillaire, sachez que vous pouvez prendre
          réservation par téléphone ou bien en remplissant le formulaire
          ci-contre.
        </p>

        <Formulaire />

        <p id="a-savoir-contact">
          <u>A savoir :</u> Nous proposons des prestations sans RDV tous les
          matins de 9h à 12h30.
        </p>

        <h3>
          Vous souhaitez nous suivre sur les réseaux ou tout simplement nous
          contacter ?{" "}
        </h3>
        <p>
          Sachez que vous pouvez suivre notre salon de coiffure sur Facebook
          ainsi que sur Instagram. Cela vous permettra de rester informé des
          dernieres nouvelles du salon, de nos mises à jour concernant la
          galerie, de nos offres exceptionnelles et bien d'autres choses..{" "}
        </p>
        <p>
          Pour toute demande spécifique, nous vous invitons à nous contacter par
          email. Si vous souhaitez prendre rendez-vous, n'hésitez surtout pas à
          nous appeler. Nous nous ferons un plaisir de donner suite à votre
          demande après consultation en direct de notre planning de la semaine.
        </p>

        <div className="icones-reseaux">
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" className="insta item-social" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="Facebook" className="facebook item-social" />
          </a>
          <a href="tel:3949">
            <img src={Whatsapp} alt="Whatsapp" className="whatsapp item-social" />
          </a>
          <a href="mailto: adelinecoiffure@gmail.com">
            <img src={Email} alt="Email" className="email item-social" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
