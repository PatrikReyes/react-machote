import { useLaminas } from "./useLaminas";

export const Imagen = () => {
  const { laminaSeleccionadaUrl } = useLaminas();

  return (
    <div style={{ textAlign: "center" }}>
      <img src={laminaSeleccionadaUrl} alt="imagen" className="imagenLamina" />
    </div>
  );
};
