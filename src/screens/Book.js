import React from 'react'
import Nav from '../components/Nav'
import JSH from "../assets/JSON/coupeHomme.json" // ICI L IMPORT HOMME
import JSF from "../assets/JSON/coupeFemme.json"
import JSK from "../assets/JSON/coupeKids.json"
// A VOIR = https://designcode.io/react-hooks-handbook-load-local-data
import './Book.css'
import Footer from "../components/Footer";


function Book() {



  return (
<div>
  <Nav />
  <div className="main withoutband">
    <h1>La Hair'Style Gallery</h1>
    <p>Dans cette partie, vous retrouverez quelques inspirations provenants de coupes réalisées sur des clients de notre salon.</p>

    <div className="composant-tableau fond-diff">
      <h2>GALERIE FEMME</h2>
      <div className="albumm">
        { JSF && JSF.map (userF => 
        <div className="shooting-card">
          <img key={userF.id} src={userF.urlF} className="picture-book" alt="people hair"></img>   
        </div>  
        )}
      </div>
    </div>

    <div className="composant-tableau fond-diff">
      <h2>GALERIE HOMME</h2>
      <div className="albumm">
        { JSH && JSH.map (user => 
        <div className="shooting-card">
          <img key={user.id} src={user.urlH} className="picture-book" alt="people hair"></img>   
        </div>  
        )}
      </div>
    </div>


    <div className="composant-tableau fond-diff">
      <h2>GALERIE ENFANT</h2>
      <div className="albumm">
        { JSK && JSK.map (userK => 
        <div className="shooting-card">
          <img key={userK.id} src={userK.urlK} className="picture-book" alt="people hair"></img>   
        </div>  
        )}
      </div>
    </div>

  </div>
  <Footer />
</div>

  )}

export default Book