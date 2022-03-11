import React from 'react';
import DescubrirMarcas from "./Imagen/DescubrirMarcas.jpeg";

const DMarca = () => {
    return (

        <div className="relative flex">
            
            <div className="justify-between font-cormorant bg-gradient-to-r from-blue-200">
                <h1 className="text-6xl font-[700] ml-[55px] mt-[20%]">Encontra las mejores marcas para tu mascota</h1>
                <br/>
                <h2 className="text-3xl font-poppins ml-[55px]">Descubri marcas y sus historias</h2>
                <br/>
                <button className='bg-[#FF8126] text-white rounded w-[200px] h-11 mb-6 font-poppins ml-[55px]'>
                    Buscar Marcas
                </button>
            </div>

                
            <div className="justify-between ml-[20%] flex">
                <img className="object-cover" src={DescubrirMarcas}/>
            </div>
        
        </div>
    )
}

export default DMarca;

