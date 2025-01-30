import { useParams } from 'react-router-dom';
import { useGetTemaByID } from '../../../../hooks/useGetTemaByID';

export default function useGetTiempoMaximo() {

    const {temaObj} = useGetTemaByID();

   return {tiempoMaxMinutos: temaObj?.tiempoMaxMinutos}
}
