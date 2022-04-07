import React from 'react'
import DMarca from './DescubrirMarcas/DescubrirMarcas'
import Partner from './Partner/Partner'
import SpaDay from './SpaDay/SpaDay'
import UltimasOfertas from './UltimasOfertas/UltimasOfertas'
import Adoptar from './Adopta/adopta'
import PorqueElegirnos from "./PorqueElegirnos/PorqueElegirnos"
import CarouselComponent from './Carusel/carusel'




const Inicio = () => {
  return (
    <main>
      <DMarca/>
      <UltimasOfertas/>
      <PorqueElegirnos/>
      <SpaDay/>
      <Adoptar/>
      <Partner/>
      <CarouselComponent/>
    </main>
  )
}

export default Inicio