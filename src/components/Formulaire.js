import React from "react";
import emailjs from "emailjs-com";
import "./Formulaire.css";

function Formulaire() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_akncxed",
        "template_lww9tbt",
        e.target,
        "u4Bsdgwe03YEAP_7F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Votre demande a bien été envoyé ! Nous vous rappelons très vite !");
  };

  return (
    <div id="form">
      <h2>Formulaire de contact</h2>
      <p>
        Prenez RDV en remplissant notre formulaire et obtenez une confirmation
        par téléphone dans les heures qui suivent !
      </p>

      <form className="container-form" onSubmit={sendEmail}>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom-client"
          name="user_lastname"
          placeholder="Entrez votre nom"
        />

        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom-client"
          name="user_firstname"
          placeholder="Entrez votre prenom"
        />

        <label htmlFor="telephone">Téléphone</label>
        <input
          type="tel"
          id="telephone-client"
          name="user_telephone"
          placeholder="06.05.04.03.02"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email-client"
          name="user_email"
          placeholder="monemail@gmail.com"
        />

        <label htmlFor="message">Votre demande</label>

        <textarea
          placeholder="N'hésitez pas à préciser le type de soin que vous souhaitez ainsi que le jour de rendez-vous désiré. Avec ces informations, nous pourrons vous proposer un créneau adéquat lorsque nous vous rappelerons."
          name="user_message"
        ></textarea>

        <input type="submit" value="Envoyer" id="btnSubmit" />
      </form>
    </div>
  );
}

export default Formulaire;
