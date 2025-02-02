import React from "react";
import { useSelector } from "react-redux";
import { TemasItem } from "./_TemasItem";
import { Col, Row } from "antd";
import { LoadingTemas } from "./_LoadingTemas";

export const TemasContent = () => {
  const { temasInicial } = useSelector((state) => state.contenidosReducer);
  const { loading } = useSelector((state) => state.contenidosReducer);

  if (loading) return <LoadingTemas />;

  return (
    <div>
      <Row gutter={[10, 10]}>
        {temasInicial.map((tema, index) => (
          <Col xs={24} lg={12} xxl={8} key={index}>
            <TemasItem key={index} tema={tema} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
