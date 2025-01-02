import { useNavigate, useParams } from "react-router-dom";
import img from "../../../assets/exam.png";
export const ExamenContent = () => {
  const navigate = useNavigate();
  const { temaID } = useParams();

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={img} style={{ height: 200 }} alt="imagen" />
      </div>
      <div className="ExamenInicial_recuadroExamen">
        Son 40 preguntas, todas contienen 4 respuestas de opción múltiple y solo
        una respuesta será la correcta.
      </div>
      <div className="ExamenInicial_recuadroExamen">
        En este examen cuentas con 40 minutos para su realización, en el momento
        que se termine el tiempo, el examen se cerrará automáticamente
      </div>
      <div className="ExamenInicial_recuadroExamen">
        <div
          onClick={() => navigate(`/doExamen/${temaID}`)}
          className="Boton_EmpezarExamen"
        >
          Empezar Examen
        </div>
      </div>
    </div>
  );
};
