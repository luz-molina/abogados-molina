import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Abogados from "./AbogadosMolina";
import Servicios from "./Servicios";
import Mision from "./Mision";
import Vision from "./Vision";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Abogados />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export default App;
