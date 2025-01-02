import { fetchData } from "../../../api/api";
import { _URL } from "../../../const/url";
import { setPuedeExamenFinal } from "./contenidosSlice";

export const startPuedeExamenFinal = () => async (dispatch) => {
  try {
    const url = `${_URL}/AlumnoFront/puedeExamenFinal`;
    const res = await fetchData("get", url);
    if (res.ok) dispatch(setPuedeExamenFinal(res.data));
    else console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const startGetExamenFinal = () => async (dispatch) => {
  try {
    const url = `${_URL}/AlumnoFront/getExamenFinal`;
    const res = await fetchData("get", url);

    if (res.ok) {
      return res.data;
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};


export const startPostExamenFinal = (body) => async (dispatch) => {
  try {
    const url = `${_URL}/Actividades/postExamenFinal`;
    const res = await fetchData("post", url, body);
    if (res.ok) {
      console.log("Examen final guardado");
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
}