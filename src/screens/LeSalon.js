import React from 'react'
import './LeSalon.css'
import Salon from '../assets/salon.jpg'
import Nav from '../components/Nav' 

function LeSalon() {
  return (
    <div>
      <Nav />
    <div className="page">
      <img src={Salon} alt="salon"className="bande-photo" />
    <div className="main home">
    <h1>Quelques mots sur votre salon de coiffure</h1>

    <p>Fort de l’expérience de notre gérante, l'Atelier d'Adeline est heureux de vous accueillir en vue de réaliser les colorations et autres coupes de cheveux dont vous rêvez.</p>
    <p>Coiffeurs pour femmes, hommes et enfants, nous sommes à l’écoute de vos besoins et mettrons nos compétences à votre service pour vous satisfaire.
</p>
    
    <h3>Une affaire familiale</h3>
    <p>Notre salon de coiffure – à Antibes, dans les environs de Cannes, Biot, Mougins ou encore Valbonne - mise sur le savoir-faire de son équipe, composée de coiffeurs rigoureux et dynamiques.</p>
    <p>Depuis sa reprise en 2009, de nombreux clients ont ainsi eu la chance de bénéficier de ses conseils avisés !
</p>
    <p>Et parce nous sommes tous membres de la même famille, nous comptons sur notre complicité pour insuffler bonne humeur et légèreté à notre établissement, de quoi travailler dans les meilleures conditions !</p>
    
    
    <h3>Le bon diagnostic</h3>
    <p>Qualité du cheveux, coiffure en accord avec l’évènement organisé, coupe de cheveux adaptée à la forme de votre visage, l’appui d’un expert est indispensable pour pouvoir vous admirer dans le miroir avec fierté et contentement.</p>
    <p>En plus de proposer des créations modernes et actuelles, nous veillons donc à vous orienter vers des idées qui vous valorisent ! N’hésitez pas à contacter notre salon de coiffure à Antibes pour obtenir une évaluation gratuite des opérations à effectuer (lissage, coloration, extension…).</p>
    
    <h3>Des surprises à dénicher</h3>
    <p>Lors de votre visite, n’oubliez pas de jeter un œil sur nos rayonnages. Bon nombre de produits capillaires sont à votre disposition ainsi que certaines références de maquillage.</p>
    <p>Et pour parfaire votre tenue, pourquoi ne pas vous offrir un nouveau sac en main ? Nous avons quelques modèles en stock qui pourraient vous plaire !</p></div>
    </div>
    </div>
  )
}

export default LeSalon