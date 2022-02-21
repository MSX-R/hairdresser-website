import React from 'react'
import './Formulaire.css'

function Formulaire() {
  return (
    <div>
        <h2>Formulaire de contact</h2>
        <p>Prenez RDV en remplissant notre formulaire et obtenez une confirmation par téléphone dans les heures qui suivent !</p>

        <form className="container-form">
          
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom-client" name="nom" placeholder="Entrez votre nom" />
        
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom-client" name="prenom" placeholder="Entrez votre prenom" />

            <label htmlFor="telephone">Téléphone</label>
            <input type="number" id="telephone-client" name="telephone" placeholder="06.05.04.03.02" />
        </form>
    </div>
  )
}

export default Formulaire