import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startPuedeExamenFinal } from '../../store/slices/contenidos/examenFinalThunks'

export const usePuedeExamenFinal = () => {
    const {puedeExamenFinal} = useSelector(state => state.contenidosReducer)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(startPuedeExamenFinal())
}, [])
  return {puedeExamenFinal}
}
