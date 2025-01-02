import { fetchData } from "../../../api/api";
import { _URL } from "../../../const/url";
import { storeLaminas, storeTemasInicial } from "./contenidosSlice";

export const startGetTemasInicial = () => {
  return async (dispatch) => {
    try {
      const url = `${_URL}/AlumnoFront/GetTemasInicial`;
      const res = await fetchData("get", url);
      if (res.ok) dispatch(storeTemasInicial(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const startGetLaminas = (temaID) => {
  return async (dispatch) => {
    try {
      const url = `${_URL}/laminas/${temaID}`;
      const res = await fetchData("get", url);

      if (res.ok) dispatch(storeLaminas(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const startGetPreguntasByTemaID = (temaID) => {
  return async () => {
    try {
      const url = `${_URL}/preguntas/${temaID}`;
      const res = await fetchData("get", url);

      

      if (res.ok) return res.data;
    } catch (error) {
      console.error(error);
    }
  };
};
