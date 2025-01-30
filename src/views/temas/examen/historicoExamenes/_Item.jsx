import { Col, Row } from "antd";
import React from "react";

export const Item = ({ a }) => {
  return (
    <Row className="RenglonTablaLinea" style={{width: '50%', margin: 'auto'}}>
      <Col span={8}>{a.fecha}</Col>
      <Col span={8}>{a.preguntasCorrectas}</Col>
      <Col span={8}>{a.preguntasTotales}</Col>
    </Row>
  );
};
