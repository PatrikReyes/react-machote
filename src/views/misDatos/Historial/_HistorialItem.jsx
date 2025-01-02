import { Col, Row } from "antd";
import React from "react";
import { dateFromString } from "../../../utils/dateFromString";

export const HistorialItem = ({ actividad }) => {
  return (
    <Row gutter={10} className="RenglonTabla" justify="start">
      <Col xs={10} md={8} style={{ textAlign: "center" }}>
        {dateFromString(actividad.fechaExamen).soloFecha}
      </Col>
      <Col xs={8} md={8} style={{ textAlign: "center" }}>
        {actividad.preguntasCorrectasFinal} / {actividad.preguntasTotalesFinal}
      </Col>
      <Col xs={4} md={2} style={{ textAlign: "center" }}>
        {actividad.preguntasCorrectasFinal / actividad.preguntasTotalesFinal}
      </Col>
    </Row>
  );
};
