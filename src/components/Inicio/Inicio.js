import React from 'react'
import DMarca from '../DescubrirMarcas/DescubrirMarcas'
import Partner from './Partner/Partner'
import SpaDay from './SpaDay/SpaDay'
import UltimasOfertas from './UltimasOfertas/UltimasOfertas'
import PorqueElejirnos, { caracteristicas } from "../WhyChoose"



const Inicio = () => {
  return (
    <main>
      <DMarca/>
      <UltimasOfertas/>
      <PorqueElejirnos>{caracteristicas}</PorqueElejirnos>
      <Partner/>
      <SpaDay/>
    </main>
  )
}

export default Inicio