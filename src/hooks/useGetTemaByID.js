import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useGetTemaByID = () => {
    const { temaID } = useParams();
  const [temaNombre, setTemaNombre] = React.useState("");
  const [temaObj, setTemaObj] = React.useState(null);
  const { temasInicial } = useSelector((state) => state.contenidosReducer);

  useEffect(() => {
    if (temasInicial.length === 0) return;
    const res = temasInicial.find((t) => t.temaID == temaID);
    setTemaNombre(res.tema);
    setTemaObj(res)
  }, [temasInicial]);

  return { temaNombre, temaObj  };
};
