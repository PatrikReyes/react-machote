import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Col, Progress, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const TemasItem = ({
  tema: {
    tema,
    laminasTotales,
    temaID,
    laminasVistas,
    historialExamenes,

  },
}) => {
  const navigate = useNavigate();

  const getCalificacion = () => {
    if(historialExamenes.length === 0) return 0;

    return historialExamenes[0].calificacion * 10
  }



  return (
    <div className="Temas_Container">
      <Row gutter={[10]}>
        <Col span={24} className="Temas_Tema">
          {tema}
        </Col>
        <Col
          span={12}
          className="Temas_Subtema"
          onClick={() => navigate(`/laminas/${temaID}`)}
        >
          Láminas de tema <EyeOutlined />
        </Col>
        <Col
          span={12}
          className="Temas_Subtema"
          onClick={() => navigate(`/examen/${temaID}`)}
        >
          Examen de tema <EditOutlined />
        </Col>
        <Col span={12} style={{ textAlign: "center", paddingTop: 10 }}>
          <Progress
            type="dashboard"
            steps={Math.trunc(laminasTotales / 4)}
            percent={Math.trunc((laminasVistas / laminasTotales) * 100)}
            trailColor="#f1f1f1"
            strokeColor="orange"
            strokeWidth={20}
          />
        </Col>
        <Col span={12} style={{ textAlign: "center", paddingTop: 10 }}>
          <Progress
            type="dashboard"
            steps={10}
            percent={getCalificacion()*10}
            trailColor="#f1f1f1"
            strokeColor="teal"
            strokeWidth={10}
            format={() => getCalificacion()}
          />
        </Col>
      </Row>
    </div>
  );
};
