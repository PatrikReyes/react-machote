import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startGetPreguntasByTemaID } from "../../../../store/slices/contenidos/thunks";
import { useParams } from "react-router-dom";

export const useGetPreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const dispatch = useDispatch();
  const { temaID } = useParams();

  useEffect(() => {
    dispatch(startGetPreguntasByTemaID(temaID)).then((data) =>
      setPreguntas(data)
    );
  }, [temaID]);

  return { preguntas };
};