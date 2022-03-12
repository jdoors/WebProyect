import React from 'react';
import DescubrirMarcas from "./Imagen/DescubrirMarcas.jpeg";

const DMarca = () => {
    return (

        <div className="flex-row w-screen md:flex">
                
            <div className="h-[600px] object-center font-cormorant bg-gradient-to-b md:bg-gradient-to-r from-blue-200">
                <br/>
                <h1 className="text-3xl md:text-6xl font-[700] ml-[55px] mt-[15%]">Encontra las mejores marcas para tu mascota</h1>
                <br/>
                <h2 className="text-xl md:text-3xl font-poppins ml-[55px]">Descubri marcas y sus historias</h2>
                <br/>
                <button className='border-2 border-black text-black rounded w-[200px] h-11 font-poppins ml-[55px]'>
                    Buscar Marcas
                </button>
            </div>

            <div className="hidden md:block">
                    <img className="object-none object-left h-[600px]" src={DescubrirMarcas}/>
            </div>
            
        </div>
    )
}

export default DMarca;

