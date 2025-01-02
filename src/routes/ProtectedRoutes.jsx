import { Route, Routes } from "react-router-dom";

import { LayoutPage } from "../layout/LayoutPage";
import { Temas } from "../views/temas/Temas";
import { MisDatos } from "../views/misDatos/MisDatos";
import { Descargas } from "../views/descargas/Descargas";
import { ExamenFinal } from "../views/examenFinal/ExamenFinal";
import { Laminas } from "../views/temas/laminas/Laminas";
import { Examen } from "../views/temas/examen/Examen";
import { DoExamenFinal } from "../views/examenFinal/doExamenFinal/DoExamenFinal";
import { DoExamen } from "../views/temas/examen/doExamen/DoExamen";

export const ProtectedRoutes = () => {


  return (
    <LayoutPage>
      <Routes>
        <Route path="/misDatos" element={<MisDatos />} />

        <Route path="/temas" element={<Temas />} />
        <Route path="/laminas/:temaID" element={<Laminas />} />
        <Route path="/examen/:temaID" element={<Examen />} />
        <Route path="/doExamen/:temaID" element={<DoExamen />} />

        <Route path="/descargas" element={<Descargas />} />
        <Route path="/examenFinal" element={<ExamenFinal />} />
        <Route path="/doExamenFinal" element={<DoExamenFinal />} />
        <Route path="/" element={<Temas />} />
      </Routes>
    </LayoutPage>
  );
};
