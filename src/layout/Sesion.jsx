import React, { useEffect, useState } from "react";
import Cron from "../components/cron/Cron";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/slices/auth/userSlice";

export const Sesion = () => {
    const dispatch = useDispatch();
  const [cambiado, setCambiado] = useState(false);
  const { minutosSesion } = useSelector((state) => state.userReducer);

  const onFinish = () => {
    console.log("Terminado");
    dispatch(logOut())
  };

  useEffect(() => {
   setCambiado(true);

    setTimeout(() => {
      setCambiado(false);
    }, 300);

  }, [minutosSesion]);

  console.log({ minutosSesion });

  if (cambiado) return <></>;
  return (
    <div style={{color: "#f5f5f5"}}>
      <Cron onFinish={onFinish} minutos={20} hide />
    </div>
  );
};
