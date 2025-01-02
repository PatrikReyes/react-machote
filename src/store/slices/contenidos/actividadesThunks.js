import { fetchData } from "../../../api/api";
import { _URL } from "../../../const/url";
import { storeActividadesFinalAlumno } from "./contenidosSlice";

export const startPostActividadExamen = (body) => async (dispatch) => {
  try {
    const url = `${_URL}/actividades/PostActividadExamen`;
    const res = await fetchData("post", url, body);

    if (res.ok) {
      console.log("Actividad de examen guardada");
    } else {
      console.log("Error al guardar actividad de examen");
    }
  } catch (error) {
    console.error(error);
  }
};

export const startUpdActividadLaminas = (body) => async (dispatch) => {
  try {
    const url = `${_URL}/actividades/UpdActividadLaminas`;
    const res = await fetchData("put", url, body);

    if (res.ok) {
      console.log("Actividad de laminas guardada");
    } else {
      console.log("Error al guardar actividad de laminas");
    }
  } catch (error) {
    console.error(error);
  }
};

export const startGetActividadesFinalAlumno = () => async (dispatch) => {
  try {
    const url = `${_URL}/actividades/GetActividadesFinalAlumno`;
    const res = await fetchData("get", url);

    if (res.ok) {
      dispatch(storeActividadesFinalAlumno(res.data));
    } else {
      console.log("Error al obtener actividades de alumno");
    }
  } catch (error) {
    console.error(error);
  }
};
