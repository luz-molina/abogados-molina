import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Abogados from "./AbogadosMolina";
import Servicios from "./Servicios";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Abogados />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;
