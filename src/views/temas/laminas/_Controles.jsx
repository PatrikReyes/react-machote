import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";
import { Button, Col, Row, Progress } from "antd";
import React from "react";
import { useLaminas } from "./useLaminas";

export const Controles = () => {
  const {
    laminaPercetaje,
    laminaSeleccionada,
    avanza,
    retrocede,
    laminasTotal,
  } = useLaminas();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Progress
          percent={laminaPercetaje}
          percentPosition={{ align: "center", type: "inner" }}
          showInfo={false}
          size={["70%", 10]}
          strokeColor="#1677FF"
        />
      </div>
      <Row
        gutter={20}
        justify="center"
        style={{ marginTop: 10, paddingBottom: 20 }}
      >
        <Col xs={8} lg={6} style={{ textAlign: "center" }}>
          <Button
            size="large"
            type="primary"
            shape="circle"
            icon={<StepBackwardOutlined />}
            onClick={retrocede}
          />
        </Col>
        <Col xs={8} lg={6} style={{ paddingTop: 10 }} className="numeroLamina">
          {laminaSeleccionada + 1} / {laminasTotal}
        </Col>
        <Col xs={8} lg={6} style={{ textAlign: "center" }}>
          <Button
            size="large"
            type="primary"
            shape="circle"
            icon={<StepForwardOutlined />}
            onClick={avanza}
          />
        </Col>
      </Row>
    </>
  );
};
