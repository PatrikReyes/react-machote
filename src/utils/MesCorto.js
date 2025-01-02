export const MesCorto = (numero) => {
  let mes = "";
  switch (numero) {
    case 1:
      mes = "ene";
      break;
    case 2:
      mes = "feb";
      break;
    case 3:
      mes = "mar";
    case 4:
      mes = "abr";
      break;
    case 5:
      mes = "may";
      break;
    case 6:
      mes = "jun";
      break;
    case 7:
      mes = "jul";
      break;
    case 8:
      mes = "ago";
      break;
    case 9:
      mes = "sep";
      break;
    case 10:
      mes = "oct";
      break;
    case 11:
      mes = "nov";
      break;
    case 12:
      mes = "dic";
      break;
    default:
      break;
  }

  return mes;
};
