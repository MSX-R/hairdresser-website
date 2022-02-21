import React from 'react'
import './Home.css'
import Salon from '../assets/3.jpg'

function Home() {
  return (
    <div className="page">
<img src={Salon} alt="salon" className="salon-pic"/>
      <div className="main home">
        <h1>BIENVENUE SUR LE SITE "ADELINE COIFFURE"</h1>
        <p>" Pour ceux qui ne nous connaissent pas encore, nous sommes 3 coiffeuses co-gérantes d'un salon de coiffure portant le nom de "Adeline Coiffure".
          
          Dans notre salon nous ne coiffons que les hommes.
          C'est notre concept alors.. Désole Mesdames, on répond à une forte demande.
          
          <p>
          Messieurs, vous souhaitez : 
          - un dégradé
          - une coupe mulet
          - une meche à la tintin
          - ou bien le crane de fabien barthez ?</p>
          
       >
          Prenez rendez-vous avec l'une de nous 3, on s'occupera de votre jolie cuir chevelu.
          
          A noter: Nous sommes ouvert du Lundi au Dimanche Non-stop de 09h à 22h.
          
          Bonne Visite  </p>
      </div>
      </div>
  )
}

export default Home