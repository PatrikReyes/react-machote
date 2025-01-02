import { useParams } from "react-router-dom";
import img from "../../../assets/exam.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startPostExamenFinal } from "../../../store/slices/contenidos/examenFinalThunks";

export const Fin = ({ respuestasCorrectas, preguntasTotales }) => {
  const dispatch = useDispatch();
  const { temaID } = useParams();

  useEffect(() => {
    const body = {
      preguntasCorrectasFinal: respuestasCorrectas,
      preguntasTotalesFinal: preguntasTotales,
    };
    dispatch(startPostExamenFinal(body));
  }, [temaID]);

  ///
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={img} style={{ height: 200 }} alt="imagen" />
      </div>
      <div className="ExamenInicial_recuadroExamen">
        Haz tenido {respuestasCorrectas}{" "}
        {respuestasCorrectas === 1
          ? "respuesta corecta"
          : "respuestas correctas"}{" "}
        de un total de {preguntasTotales} preguntas, puedes volver a efectuar el
        examen si deseas.
      </div>
    </div>
  );
};
