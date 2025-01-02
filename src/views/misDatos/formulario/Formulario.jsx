import { Button, Col, Divider, Input, Row } from "antd";
import React, { useState } from "react";
import { useFormulario } from "./useFormulario";

export const Formulario = () => {
 const {body, change, submit, disabled} = useFormulario()
  //
  return (
    <div>
      <Divider
        orientation="left"
        style={{ color: "teal", borderColor: "teal" }}
      >
        Información de Acceso{" "}
      </Divider>

      <Row gutter={[10, 10]} style={{marginBottom: 10}}>
        <Col xs={12} lg={8} xl={6}>
          <Input
            name="nombre"
            placeholder="nombre"
            onChange={change}
            value={body.nombre}
          />
        </Col>
        <Col xs={12} lg={8} xl={6}>
          <Input
            name="email"
            placeholder="email"
            onChange={change}
            value={body.email}
          />
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        <Col xs={12} lg={8} xl={6}>
        <Input.Password
            name="password"
            placeholder="password"
            onChange={change}
            value={body.password}
          />
        </Col>
        <Col xs={12} lg={8} xl={6}>
          <Input.Password
            name="password2"
            placeholder="confirma"
            onChange={change}
            value={body.password2}
          />
        </Col>
      </Row>
     
      <div className="small">6 caracteres mínimo | Si no desea cambiar contraseña, dejarn en blannco</div>
      <Row gutter={[10, 10]} style={{marginBottom: 50}}>
        <Col xs={12} lg={8} xl={6}>
          <Button disabled={disabled()} onClick={submit} type="primary">Actualizar Información</Button>
        </Col>
      </Row>
    </div>
  );
};
