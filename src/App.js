import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
// import des pages
import Home from './screens/Home';
import LeSalon from './screens/LeSalon';
import Book from './screens/Book';
import Prestations from './screens/Prestations';
import About from './screens/About';
// 

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/le-salon" element={<LeSalon />} />
        <Route path="/book" element={<Book />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;