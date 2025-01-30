import React from "react";

export const usePregunta = (setRespuesatsCorrectas, setPreguntaIndex, pregunta) => {
  const [respuesta, setRespuesta] = React.useState();
  const [showCorrecta, setShowCorrecta] = React.useState(false);

  //
  const continuar = () => {

    const respuestaSeleccionada = pregunta.respuestas.find(
      (a) => a.id === respuesta
    );

    if (respuestaSeleccionada.esCorrecta)
      setRespuesatsCorrectas((prev) => prev + 1);

    setShowCorrecta(true);
    setRespuesta(null);

    setTimeout(() => {
      setPreguntaIndex((prev) => prev + 1);
      setShowCorrecta(false);
    }, 4500);
  };


  //
  return {
    respuesta,
    setRespuesta,
    showCorrecta,
    setShowCorrecta,
    continuar,
  };
};
