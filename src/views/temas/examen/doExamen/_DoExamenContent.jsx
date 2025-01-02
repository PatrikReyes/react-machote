import React, { useEffect, useState } from "react";
import { useGetPreguntas } from "./useGetPreguntas";
import { Pregunta } from "./_Pregunta";
import { Progress } from "antd";
import { Fin } from "./_Fin";

export const DoExamenContent = ({ terminado }) => {
  const [respuestasCorrectas, setRespuesatsCorrectas] = useState(0);
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const { preguntas } = useGetPreguntas();
  const pregunta = preguntas[preguntaIndex];

  useEffect(() => {
    if (terminado) setPreguntaIndex(preguntas.length);
  }, [terminado]);

  ////
  if (preguntas.length === 0) return <div></div>;
  if (preguntaIndex === preguntas.length)
    return (
      <Fin
        respuestasCorrectas={respuestasCorrectas}
        preguntasTotales={preguntas.length}
      />
    );

  ///
  return (
    <div>
      <Pregunta
        pregunta={pregunta}
        setRespuesatsCorrectas={setRespuesatsCorrectas}
        setPreguntaIndex={setPreguntaIndex}
      />

      <div style={{ textAlign: "center" }}>
        <Progress
          percent={preguntaIndex*100/40}
          percentPosition={{ align: "center", type: "inner" }}
          showInfo={false}
          size={["70%", 10]}
          strokeColor="#1677FF"
        />
        {preguntaIndex + 1} de 40
      </div>
    </div>
  );
};
