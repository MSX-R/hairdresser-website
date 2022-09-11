import React from "react";
import Nav from "../components/Nav";
import JSH from "../assets/JSON/coupeHomme.json"; 
import JSF from "../assets/JSON/coupeFemme.json";
import JSK from "../assets/JSON/coupeKids.json";
import "./Book.css";
import Footer from "../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Book() {
  return (
    <div>
      <Nav />
      <div className="main withoutband">
        <h1>La Hair'Style Gallery</h1>
        <p>
          Dans cette partie, vous retrouverez quelques inspirations provenants
          de coupes réalisées sur des clients de notre salon.
        </p>

        <div className="composant-tableau fond-diff">
          <h2>GALERIE FEMME</h2>
          <div className="album">
            <Carousel>
              {JSF.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.url} alt="" />
                  <div className="overlay"></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="composant-tableau fond-diff">
          <h2 className="albumGenre">GALERIE HOMME</h2>
          <div className="album">
            <Carousel>
              {JSH.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.url} alt="" />
                  <div className="overlay"></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="composant-tableau fond-diff">
          <h2>GALERIE ENFANT</h2>
          <div className="album">
            <Carousel>
              {JSK.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.url} alt="" />
                  <div className="overlay"></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
