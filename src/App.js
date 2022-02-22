import './App.css';
import { Routes, Route } from "react-router-dom";
// import des pages
import Home from './screens/Home';
import LeSalon from './screens/LeSalon';
import Book from './screens/Book';
import Prestations from './screens/Prestations';
import Contact from './screens/Contact';
// 
import WelcomePage from './screens/WelcomePage';
// 
// import Modal from './components/Modal';
//

function App() {
  return (
    <div className="App">
      {/* <Modal /> A REACTIVER SI BOUTON OK NAV CONTACT*/}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/le-salon" element={<LeSalon />} />
        <Route path="/book" element={<Book />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<WelcomePage />} />

      </Routes>
    </div>
  );
}

export default App;