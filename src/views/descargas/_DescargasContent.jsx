import img from "../../assets/Icono_PDF.png";
import file from "../../assets/Manual_Calculadora_HP_2019.pdf";

export const DescargasContent = () => {
  const click = () => {
    window.open(file, "_blank");
  };

  return (
    <div style={{ padding: 50 }}>
      <div>
        <img
          onClick={click}
          src={img}
          style={{ height: 200, cursor: "pointer" }}
          alt="imagen"
        />
      </div>
      <div style={{ fontWeight: 600, paddingTop: 10 }}>
        Manual de Calculadora HP 2019
      </div>
    </div>
  );
};
