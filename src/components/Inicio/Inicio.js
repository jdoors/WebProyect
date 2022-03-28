import React from 'react'
import DMarca from './DescubrirMarcas/DescubrirMarcas'
import Partner from './Partner/Partner'
import SpaDay from './SpaDay/SpaDay'
import UltimasOfertas from './UltimasOfertas/UltimasOfertas'
import PorqueElegirnos from "./PorqueElegirnos/PorqueElegirnos"



const Inicio = () => {
  return (
    <main>
      <DMarca/>
      <UltimasOfertas/>
      <PorqueElegirnos/>
      <SpaDay/>
      <Partner/>
    </main>
  )
}

export default Inicio