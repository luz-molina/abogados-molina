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
        <Link to="/servicios" style={styles.link}>Servicios</Link>
        <a href="#nosotros" style={styles.link}>Nosotros</a>
        <a href="#contacto" style={styles.link}>Contacto</a>
      </nav>

      <main style={styles.container}>
        <div style={styles.overlay}>
        <section style={{marginBottom: "40px"}}>
          <h2 style={styles.h2}>Misión</h2>
          <p style={styles.text}>
            Proteger los derechos laborales de nuestros clientes mediante un acompañamiento cercano, profesional y
            trasnparente ofreciendo soluciones legales claras y efectivas en cada estapa del proceso.
          </p>
        </section>

        <section style={{marginBottom: "40px"}}>
          <h2 style={styles.h2}>Visión</h2>
          <p style={styles.text}>
            Ser un despacho laboral líder, distinguido por la empatía, la confianza y la defensa firme de los derechos
            laborales, generando un impacto positivo en la vida profesional de nuestros clientes.
          </p>
        </section>

        <section id="nosotros">
          <h2 style={styles.h2}>Sobre el Despacho</h2>
          <p><strong>Abogado:</strong>  Molina Gutiérrez</p>
          <p><strong>Teléfono / WhatsApp:</strong> 55 8369 1507</p>
          <p><strong>Email:</strong> danmolinagu@gmail.com</p>
        </section>
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
    textAling: "center",
    padding: "15px",
    marginTop: "40px",
    fontSize: "24px",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    maxWidth: "1000px",
    margin: "auto",
    padding: "40px",
    borderRadius: "8px",
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
