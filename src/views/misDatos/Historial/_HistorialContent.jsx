import React from "react";
import { useSelector } from "react-redux";
import { HistorialItem } from "./_HistorialItem";
import { Col, Row } from "antd";

export const HistorialContent = () => {
  const { actividadesFinalAlumno } = useSelector(
    (state) => state.contenidosReducer
  );
  return (
    <div className="MisDatos_ContenedorActividadFinal">
      <Row gutter={10} className="TituloTabla">
        <Col xs={10} md={8} style={{ textAlign: "center" }}>
          Fecha
        </Col>
        <Col xs={10} md={8} style={{ textAlign: "center" }}>
          Respuestas
        </Col>
        <Col xs={4}  md={2} style={{ textAlign: "center" }}>
          Calificación
        </Col>
      </Row>
      {actividadesFinalAlumno.map((actividad, index) => (
        <HistorialItem key={index} actividad={actividad} />
      ))}
    </div>
  );
};
