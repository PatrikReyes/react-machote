import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdDatosAlumno } from "../../../store/slices/auth/alumnoFrontThunks";

export const useFormulario = () => {
  const dispatch = useDispatch();
  const { email, nombre } = useSelector((state) => state.userReducer.user);

  const [body, setBody] = useState({
    nombre,
    email,
    password: "",
    password2: "",
  });

  const change = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const submit = () => dispatch(startUpdDatosAlumno(body));

  const disabled = () => {
    if (!body.nombre || !body.email) return true;

    if (body.password) {
      if (body.password.length < 6) return true;
      if (body.password !== body.password2) return true;
    }

    return false;
  };

  return {
    disabled,
    body,
    change,
    submit,
  };
};
