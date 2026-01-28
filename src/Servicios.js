import React from 'react';
import './Servicios.css';

const serviciosList = [
  {
    titulo: "Asesoría Legal",
    puntos: [
      "Consultoría jurídica en materia laboral individual y colectiva.",
      "Interpretación y aplicación de la legislación laboral vigente.",
      "Prevención de conflictos laborales y análisis de riesgos."
    ]
  },
  {
    titulo: "Despidos y Terminación de la Relación Laboral",
    puntos: [
      "Asesoría en despido justificado e injustificado.",
      "Cálculo de finiquitos y liquidaciones.",
      "Negociación y conciliación laboral.",
      "Defensa ante reclamaciones por despido."
    ]
  },
  {
    titulo: "Representación ante Autoridades Laborales",
    puntos: [
      "Comparecencias ante Centros de Conciliación.",
      "Representación ante Juntas o Tribunales Laborales.",
      "Atención de inspecciones laborales.",
      "Seguimiento integral de procedimientos laborales."
    ]
  },
  {
    titulo: "Conciliación y Resolución de Conflictos",
    puntos: [
      "Negociación entre las partes.",
      "Solución de controversias por la vía conciliatoria.",
      "Elaboraión y revisión de convenios laborales."
    ]
  },
  {
    titulo: "Contratos y Documentación Laboral",
    puntos: [
      "Elaboración y revisión de contratos de trabajo.",
      "Reglamentos interiores de trabajo.",
      "Políticas laborales internas.",
      "Cartas administrativas y actas laborales."
    ]
  },
  {
    titulo: "Asesoría Empresarial",
    puntos: [
      "Cumplimiento normativo laboral.",
      "Estrategias de prevención de demandas.",
      "Auditorías laborales.",
      "Reestructuración de relaciones laborales."
    ]
  }
];

function Servicios() {
  return (
    <div className="servicios-container">
      <h1>Servicios Laborales</h1>
      <p>
        Brindamos asesoría y representación legal especializada en Derecho Laboral, ofreciendo soluciones estratégicas
         y personalizadas tanto para trabajadores como para empleados.
      </p>

      <div className="servicios-grid">
        {serviciosList.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <h3>{servicio.titulo}</h3>
            <ul>
              {servicio.puntos.map((punto, i) => (
                <li key={i}>{punto}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
