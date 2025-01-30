import { fetchData } from "../../../api/api";
import { _URL } from "../../../const/url";
import { setLoading, storeLaminas, storeTemasInicial } from "./contenidosSlice";

export const startGetTemasInicial = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url = `${_URL}/AlumnoFront/GetTemasInicial`;
      const res = await fetchData("get", url);

      if (res.ok) dispatch(storeTemasInicial(res.data));
    } catch (error) {
      console.error(error);
    }
    dispatch(setLoading(false));
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

export const startGetPreguntasParaAlumno = (temaID) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url = `${_URL}/AlumnoFront/GetPreguntasParaAlumno/${temaID}`;
      const res = await fetchData("get", url);
      dispatch(setLoading(false));
      if (res.ok) return res.data;
    } catch (error) {
      console.error(error);
    }

    dispatch(setLoading(false));
  };
};
