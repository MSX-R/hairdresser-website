import "./App.css";
import { Routes, Route } from "react-router-dom";
// import des pages
import Home from "./screens/Home";
import LeSalon from "./screens/LeSalon";
import Book from "./screens/Book";
import Prestations from "./screens/Prestations";
import Contact from "./screens/Contact";
import WelcomePage from "./screens/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/le-salon" element={<LeSalon />} />
        <Route path="/book-photo" element={<Book />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
