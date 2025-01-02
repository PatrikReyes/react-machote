import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startGetExamenFinal } from "../../../store/slices/contenidos/examenFinalThunks";

export const useGetPreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetExamenFinal()).then((data) => setPreguntas(data));
  }, []);


  return { preguntas };
};
