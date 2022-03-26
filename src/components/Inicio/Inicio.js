import React from 'react'
import SpaDay from './SpaDay/SpaDay'
import UltimasOfertas from './UltimasOfertas/UltimasOfertas'
import DescubrirMarcas from "./DescubrirMarcas/DescubrirMarcas"




const Inicio = () => {
  return (
    <main>
      <DescubrirMarcas/>
      <UltimasOfertas/>
      <SpaDay/>
    </main>
  )
}

export default Inicio