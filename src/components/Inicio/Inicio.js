import React from 'react'
import SpaDay from './SpaDay/SpaDay'
import UltimasOfertas from './UltimasOfertas/UltimasOfertas'
import Adoptar from './Adopta/adopta'



const Inicio = () => {
  return (
    <main>
      <UltimasOfertas/>
      <SpaDay/>
      <Adoptar/>
    </main>
  )
}

export default Inicio