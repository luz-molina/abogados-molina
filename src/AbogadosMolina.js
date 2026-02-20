import logo from './logo.PNG';
import fondoAngel from "./angel-noche.jpg";
import {Link} from "react-router-dom";

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

      <footer style={styles.footer}>
        <p>© 2026 Molina Gutiérrez & Asociados. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Georgia, serif",
    backgroundColor: "#f5f5f5",
    color: "#333",
    minHeight: "100vh",
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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    maxWidth: "1000px",
    margin: "150px auto 0 auto",
    padding: "40px",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  /*botonServicios: {
    backgroundColor: "2c3e50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },*/
};
