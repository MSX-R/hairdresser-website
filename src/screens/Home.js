import React from "react";
import "./Home.css";
import coiffeurs from "../assets/3.jpg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <div className="page">
        <img src={coiffeurs} alt="Coiffeuses" className="bande-photo" />
        <div className="main home">
          <h1>L'ATELIER D'ADELINE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            qui corporis illo. Lorem ipsum dolor sit amet consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat
            corrupti qui error assumenda soluta autem officiis distinctio
            necessitatibus ipsum. Lorem ipsum dolor sit.
          </p>
          <h2>Nos prestations sur-mesure, pour qui ?</h2>
          <h3>Femmes et hommes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae, a fugit possimus voluptatum exercitationem rem libero ad
            quos aliquam quibusdam, beatae laboriosam quo, eos natus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            dignissimos maiores harum ea laborum voluptatem, cumque doloremque
            porro dolore! Cum pariatur necessitatibus tempora, hic quam
            explicabo fugiat ipsam soluta cumque illum .
          </p>
          <h3>Enfants</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            atque sit asperiores quia nihil odio magnam molestiae, commodi,
            placeat tempore voluptates omnis, in quas officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolore provident corrupti, nesciunt ab beatae magni voluptatibus
            omnis assumenda, incidunt voluptatum a minus nihil exercitationem,
            laborum deserunt officiis velit ipsam eveniet culpa et autem
            deleniti?
          </p>
          <h3>Un grand évènement se profile ?</h3>
          <p>
            Vous êtes convié à une cérémonie ? Vous vous mariez prochainement ?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            laboriosam reiciendis iusto qui quisquam molestias soluta doloremque
            cupiditate autem consequuntur ipsum similique repellat quas
            architecto obcaecati ratione, deleniti eum? Quibusdam facilis dolore
            enim ab alias nostrum quod cumque rerum sunt eaque quis officiis
            doloribus optio est provident numquam, architecto possimus impedit
            corrupti velit? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione, exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae
            iusto autem et, molestiae ab eum consectetur !.
          </p>
          <h3 className="home-note"><u>A noter :</u></h3>{" "}
          <p>
            Votre salon est ouvert du Lundi au Samedi ( <a href="#horaires-footer" className="link-horaires"> Horaires d'ouverture disponibles en bas de page</a> ).
          </p>
          <p>Bonne Visite ! </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

/* VERSION 2
import React from 'react'
import './Home.css'
import coiffeurs from '../assets/3.jpg'
import Nav from '../components/Nav'
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
<Nav />
    <div className="page">
        <img src={coiffeurs} alt="Coiffeuses" className="bande-photo"/>
      <div className="main home">
        <h1>L'ATELIER D'ADELINE</h1>
              <p>Confiez la beauté de vos cheveux à vos coiffeurs du salon Adeline Coiffure.</p> 
              <p>À l’écoute de vos besoins, notre équipe s’attache à vous fournir les meilleurs services pour une coiffure tendance et naturelle !</p>
        <h2>Nos prestations sur-mesure, pour qui ?
        </h2>
        <h3>Femmes et hommes</h3>
        <p>Dans notre salon de coiffure mixte, tout le monde est accueilli chaleureusement ! </p>
        <p>Qu’il s’agisse de s’occuper de Madame (coloration, mèches, extension, lissage, soin, coupe…) ou de Monsieur (taille de barbe, coupe de cheveux…), nous veillons à ce que chacun sorte de notre établissement avec le sourire, satisfait du résultat obtenu !</p>

        <h3>Enfants</h3>
        <p>Une frange qui tombe sur les yeux ou une tignasse emmêlée, la chevelure de votre petite tête blonde a grandement besoin d’un rafraîchissement !</p> 
        <p>Comptez sur les compétences de nos coiffeurs, à Antibes dans la zone commerciale Carrefour Antibes, pour les prendre en charge comme il se doit !</p>

        <h3>Un grand évènement se profile ?</h3>
        <p>Vous êtes convié à une cérémonie ? Vous vous mariez très bientôt ?</p>
        <p>A l'Atelier d'Adeline, nous sommes là pour vous orienter vers la coiffure qui s’harmonisera au mieux à la fois avec la forme de votre visage et la tenue que vous porterez. </p>
        <p>Pensez à demander au plus vite un rendez-vous afin de définir les caractéristiques de votre chignon chic, de votre tresse bohème ou de vos boucles hollywoodiennes !</p>


                  
        <p>Prenez rendez-vous avec l'une de nous 3, on s'occupera de votre jolie cuir chevelu.</p>

        <p><u>A noter:</u> Votre salon est ouvert du Lundi au Dimanche Non-stop de 09h à 22h.
        </p>

        <p>Bonne Visite ! </p>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home

*/
