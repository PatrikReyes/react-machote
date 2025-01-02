import CardPage from "../../layout/CardPage"
import { MisDatosContent } from "./_MisDatosContent"
import { useGetActividadesAlumno } from "./useGetActividadesAlumno"

export const MisDatos = () => {
useGetActividadesAlumno()
  return (
    <CardPage titulo="Mis Datos" >
    <MisDatosContent />
    </CardPage>
  )
}
