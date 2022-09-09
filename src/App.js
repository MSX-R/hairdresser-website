import "./App.css";
import { Routes, Route } from "react-router-dom";
// import des pages
import Home from "./screens/Home";
import LeSalon from "./screens/LeSalon";
import Book from "./screens/Book";
import Prestations from "./screens/Prestations";
import Contact from "./screens/Contact";
//
import WelcomePage from "./screens/WelcomePage";
import Authentification from "./screens/Authentification";
//
// import Modal from './components/Modal';
//

function App() {
  return (
    <div className="App">
      {/* <Modal /> A REACTIVER SI BOUTON OK NAV CONTACT*/}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/hairdresser-website/accueil" element={<Home />} />
        <Route path="/hairdresser-website/le-salon" element={<LeSalon />} />
        <Route path="/hairdresser-website/book-photo" element={<Book />} />
        <Route path="/hairdresser-website/prestations" element={<Prestations />} />
        <Route path="/hairdresser-website/contact" element={<Contact />} />
        <Route path="/hairdresser-website/authentification" element={<Authentification />} />
      </Routes>
    </div>
  );
}

export default App;
