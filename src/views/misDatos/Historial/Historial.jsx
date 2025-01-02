import { Divider } from 'antd'
import React from 'react'
import { HistorialContent } from './_HistorialContent'

export const Historial = () => {
  return (
    <div>
      <Divider orientation="left" style={{color: 'teal', borderColor: 'teal'}}>Historial de Actividades </Divider>
      
      <HistorialContent />
      </div>
  )
}
