import logo from './logo.PNG';
import fondoAngel from "./angel-noche.jpg";
import {Link} from "react-router-dom";
import logoWhatsapp from './whatsapp-icon.png';

export default function Abogados() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img src={logo} alt="Molina Gutiérrez & Asociados" style={styles.logo}/>
          </div>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/servicios" style={styles.link}>Servicios</Link>
        <Link to="/mision" style={styles.link}>Misión</Link>
        <Link to="/vision" style={styles.link}>Visión</Link>
        <Link to="/contacto" style={styles.link}>Contacto</Link>
      </nav>

      <main style={styles.container}>
        <div style={styles.overlay}>
          <h1 style={{color:"white", textAlign: "center", marginTop: "100px", fontSize: "3rem"}}>
            Molina Gutiérrez & Asociados
          </h1>
          <p style={{color: "white", textAlign: "center", fontSize: "1.5rem"}}>
            Abogados Laborales
          </p>
        </div>
      </main>

      <div style={{textAlign: "center", marginTop: "25px"}}>
        <a
          href="https://wa.me/525544149116?text=Hola,%20solicito%20una%20asesor%C3%ADa%20legal."
          target="_blank"
          rel="noopener noreferrer"
          title="Contactarse por vía WhatsApp"
          style={styles.whatsappCircle}
          >
            <img
              src={logoWhatsapp}
              alt="WhatsApp"
              style={styles.whatsappImage}
            />
          </a>
        </div>

      <footer style={styles.footer}>
        <p>© 2026 Molina Gutiérrez & Asociados. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Georgia, serif",
    backgroundImage: `url(${fondoAngel})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    margin: 0,
  },
  header: {
    backgroundColor: "#fff",
    padding: "30px 20px",
  },
  headerContent:{
    display: "flex",
    alignItems: "center",          //centra vertical
    justifyContent: "center",      //centra horizontal
  },
  logo: {
    maxWidth: "500px",            //ajusta tamaño
    width: "100%",                //ancho
    height: "100px",               //largo
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    margin: 0,
  },
  nav: {
    backgroundColor: "#2c3e50",
    padding: "12px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  container: {
    backgroundImage: `url(${fondoAngel})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "60px 20px",
  },
  h2: {
    color: "#2c3e50",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "10px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
  },
  footer: {
    backgroundColor: "#2c3e50",
    color: "#ffffff",
    textAlign: "center",
    padding: "15px",
    marginTop: "40px",
    fontSize: "24px",
  },
  overlay: {
    maxWidth: "1000px",
    margin: "250px auto 0 auto",
    padding: "20px",
    textAlig: "center",
  },
  whatsappCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    boxShadow: "none",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  },
  whatsappImage: {
    width: "55px",
    height: "55px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    clipPath: "circle(46% at 46% 46%)",
    filter:"drop-shadow(2px 4px 6px rgba(0,0,0,0.6))",
  },
};
