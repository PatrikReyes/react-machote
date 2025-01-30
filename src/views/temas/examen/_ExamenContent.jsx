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
        Todas las preguntas contienen 4 respuestas de opción múltiple y solo
        una respuesta será la correcta.
      </div>
      <div className="ExamenInicial_recuadroExamen">
        En el momento que se termine el tiempo, el examen se cerrará automáticamente, 
        el avance y el tiempo estarán visibles en todo momento.
      </div>
      <div className="ExamenInicial_recuadroExamen">
        <div
          onClick={() => navigate(`/doExamen/${temaID}`)}
          className="Boton_EmpezarExamen"
        >
          Comenzar el Examen
        </div>
      </div>
    </div>
  );
};
