import { Spin } from "antd";
import React from "react";

export const LoadingTemas = () => {
  return (
    <div style={{ marginTop: 150, textAlign: "center" }}>
      <div>
        <Spin size="large" />
      </div>
      <div
        style={{ marginTop: 10, fontWeight: 600, fontSize: 20, color: "orange" }}
      >
        Cargando contenido, espere un poco...
      </div>
    </div>
  );
};
