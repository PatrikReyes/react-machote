export const MesLargo = (numero) => {
  let mes = "";
  switch (numero) {
    case 1:
      mes = "enero";
      break;
    case 2:
      mes = "febrero";
      break;
    case 3:
      mes = "marzo";
    case 4:
      mes = "abril";
      break;
    case 5:
      mes = "mayo";
      break;
    case 6:
      mes = "junio";
      break;
    case 7:
      mes = "julio";
      break;
    case 8:
      mes = "agosto";
      break;
    case 9:
      mes = "sepiembre";
      break;
    case 10:
      mes = "octubre";
      break;
    case 11:
      mes = "noviembre";
      break;
    case 12:
      mes = "diciembre";
      break;
    default:
      break;
  }

  return mes;
};
