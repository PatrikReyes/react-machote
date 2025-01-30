import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Item } from "./_Item";
import { Col, Row } from "antd";

export const HistoricoExamenes = () => {
  const [actividadExamen, setActividadExamen] = React.useState([]);
  const { temaID } = useParams();
  const { temasInicial } = useSelector((state) => state.contenidosReducer);

  useState(() => {
    if (temasInicial.length > 0) {
      var tema = temasInicial.find((tema) => tema.temaID == temaID);
      if (tema) setActividadExamen(tema.historialExamenes);

      console.log(tema);
    }
  }, [temasInicial, temaID]);

  return (
    <div style={{textAlign: 'center'}}>
    <div style={{marginTop: 30, marginLeft: 10, marginBottom: 10, fontWeight: 600}}>Histórico de Exámenes</div>
      <Row className="TituloTabla" style={{width: '50%', margin: 'auto'}}>
        <Col span={8}>Fecha</Col>
        <Col span={8}>Correctas</Col>
        <Col span={8}>Totales</Col>
      </Row>
      {actividadExamen.map((a, i) => (
        <Item key={i} a={a} />
      ))}
    </div>
  );
};
