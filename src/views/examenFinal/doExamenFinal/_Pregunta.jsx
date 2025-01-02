import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Col, Radio, Row } from "antd";
import React from "react";
import { usePregunta } from "./usePregunta";

export const Pregunta = ({
  pregunta,
  setRespuesatsCorrectas,
  setPreguntaIndex,
}) => {
  //
  const { respuesta, setRespuesta, showCorrecta, continuar } = usePregunta(
    setRespuesatsCorrectas,
    setPreguntaIndex,
    pregunta
  );

  //
  return (
    <div className="Preguntas_Contenedor">
      <div className="Preguntas_Pregunta">{pregunta?.pregunta}</div>
      <div className="Preguntas_Respuesta">
        <Radio.Group onChange={({ target }) => setRespuesta(target.value)}>
          {pregunta.respuestas.map((r, index) => (
            <div key={index} style={{ marginBottom: 20 }}>
              <Radio value={r.id}>
                <span
                  className={showCorrecta && r.esCorrecta ? "textoGreen" : ""}
                  style={{ marginLeft: 10, fontSize: 16 }}
                >
                  {" "}
                  {r.nombre}
                </span>{" "}
                {showCorrecta && r.esCorrecta && (
                  <CheckCircleOutlined
                    style={{ color: "#1adb24", fontSize: 18 }}
                  />
                )}
              </Radio>
            </div>
          ))}
        </Radio.Group>
      </div>

      <div style={{ marginTop: 20 }}>
        <Button disabled={!respuesta} type="primary" onClick={continuar}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};
