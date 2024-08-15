import axios from "axios";
import { URL_LOGIN } from "../../../const/url";
import { fetch, fetchSinToken } from "../../../api/api";
import {
  setLoginErr,
  setLoadingLogin,
  storeUser,
  setLogged,
} from "./userSlice";
import parseJwt from "../../../utils/parseJwt";
import { consLogged } from "../../../const/consLogged";

export const startLogin = (body) => {
  return async (dispatch) => {
    dispatch(setLoginErr(null));
    dispatch(setLoadingLogin());
    const r = await fetchSinToken("post", `${URL_LOGIN}`, {
      app: "AppAdmin",
      ...body,
    });
    if (r.ok) {
      localStorage.setItem("token", r.data.data);
      dispatch(storeUser(parseJwt(r.data.data)));
    } else {
      console.log({ r });
      if (!r.response || r.response.status == 500)
        dispatch(setLoginErr("Error en servidor"));
      if (r.response.status == 400) dispatch(setLoginErr(r.response.data));
    }
  };
};

export const startRefreshToken = () => {

  return async (dispatch) => {
  
    const token = localStorage.getItem("token");
    
    if (!token) {
      dispatch(setLogged(consLogged.NOTLOGGED));
      return;
    }

    const r = await fetchSinToken("post", `${URL_LOGIN}/Refresh`, {
      token,
      app: "AppAdmin",
    });
  
    if (r.ok) {
      localStorage.setItem("token", r.data.data);
      dispatch(storeUser(parseJwt(r.data.data)));
      dispatch(setLogged(consLogged.LOGGED));
    } else {
      dispatch(setLogged(consLogged.NOTLOGGED));
      const token = localStorage.removeItem("token");
      if (!r.response || r.response.status == 500)
        dispatch(setLoginErr("Error en servidor"));
      if (r.response.status == 400) dispatch(setLoginErr(r.response.data));
    }
  };
};
