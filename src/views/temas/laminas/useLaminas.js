import { useDispatch, useSelector } from "react-redux";
import { setLaminaSeleccionada } from "../../../store/slices/contenidos/contenidosSlice";
import { _URL } from "../../../const/url";
import { useParams } from "react-router-dom";
import { startUpdActividadLaminas } from "../../../store/slices/contenidos/actividadesThunks";
import { useEffect } from "react";
import { useActualizaSesion } from "../../../hooks/useActualizaSesion";

export const useLaminas = () => {
  const dispatch = useDispatch();
  const { temaID } = useParams();
  const {actualizar} = useActualizaSesion()
  const { laminas, laminaSeleccionada } = useSelector(
    (state) => state.contenidosReducer
  );

  useEffect(() => {
    dispatch(setLaminaSeleccionada(0));
  }, []);

  const avanza = () => {
    actualizar()
    const body = {
      temaID,
      LaminasVistas: laminaSeleccionada + 2,
      LaminasTotales: laminas.length,
    };

    if (laminaSeleccionada < laminas.length - 1) {
      dispatch(setLaminaSeleccionada(laminaSeleccionada + 1));
      dispatch(startUpdActividadLaminas(body));
    }
  };

  const retrocede = () => {
    actualizar()
    if (laminaSeleccionada > 0) {
      dispatch(setLaminaSeleccionada(laminaSeleccionada - 1));
    }
  };

  const laminaSeleccionadaFull = laminas[laminaSeleccionada];
  const laminaSeleccionadaUrl = laminaSeleccionadaFull?.url
    ? `${_URL}/laminas/getImage/${temaID}/${laminaSeleccionadaFull?.url}`
    : "https://www.freeiconspng.com/img/23485";
  const laminasTotal = laminas.length;
  const laminaPercetaje = ((laminaSeleccionada + 1) / laminas.length) * 100;

  return {
    laminas,
    laminaSeleccionada,
    avanza,
    retrocede,
    laminaSeleccionadaUrl,
    laminaPercetaje,
    laminasTotal,
  };
};
