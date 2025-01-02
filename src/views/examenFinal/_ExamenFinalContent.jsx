import img from "../../assets/exam.png";

import { useNavigate } from "react-router-dom";
import { usePuedeExamenFinal } from "./usePuedeExamenFinal";
import { Alert } from "antd";

export const ExamenFinalContent = () => {
  const navigate = useNavigate();
  const { puedeExamenFinal } = usePuedeExamenFinal();

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={img} style={{ height: 200 }} alt="imagen" />
      </div>
      <div className="ExamenInicial_recuadroExamen">
        Para el examen final debes tener acreditados todos los temas, son 220
        preguntas con 4 respuestas de opción múltiple y solo una respuesta será
        la correcta
      </div>
      <div className="ExamenInicial_recuadroExamen">
        En este examen cuentas con 4 Hrs para su realización, en el momento que
        se termine el tiempo, el examen se cerrará automáticamente
      </div>

      {!puedeExamenFinal ? (
        <div className="ExamenInicial_recuadroExamen">
          <div
            onClick={() => navigate(`/doExamenFinal`)}
            className="Boton_EmpezarExamen"
          >
            Empezar Examen Final
          </div>
        </div>
      ) : (
        <div className="ExamenInicial_recuadroExamen">
          <Alert message="Aun no puedes hacer el examen" type="warning" />
        </div>
      )}
    </div>
  );
};
