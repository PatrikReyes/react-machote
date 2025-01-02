import { fetchData } from "../../../api/api";
import { _URL } from "../../../const/url";
import parseJwt from "../../../utils/parseJwt";
import { storeUser } from "./userSlice";

export const startUpdDatosAlumno = (body) => async (dispatch) => {
  const url = `${_URL}/alumnoFront/UpdDatosAlumno`;
  const res = await fetchData("put", url, body);

  console.log({ res });
  if (res.ok) {
     localStorage.setItem("token", res.data);
     dispatch(storeUser(parseJwt(res.data)));
    console.log("Datos de alumno actualizados");
  } else {
    console.log("Error al actualizar datos de alumno");
  }
};
