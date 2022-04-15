import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Buscador = () => {

const[search, Setsearch]=useState();


const handleCloseClick=() =>{
    alert("desea cerrar la busqueda ?")
    Setsearch("");
}


return (

<div className='w-full h-full pt-6 rounded-md shadow-xl'>
    
    <label className='flex flex-row justify-center pt-8 space-x-2 '>
        <h2 className='text-white bg-[#FF8126] rounded w-56 h-8 text-center'>Buscar Productos</h2>
        <input className='border ring-black' value={search} onChange={({target:{value}}) => Setsearch(value)}/>
    </label>
    
    <div className='flex flex-row justify-center space-x-3 '>
        <button className='bg-[#FF8126]  w-14 h-8 mt-6 mb-6 rounded text-white'>
            <Link to="/Productos">Buscar</Link>
        </button>
        <button className=' bg-[#FF8126] text-white rounded w-14 h-8 mt-6 mb-6' onClick={handleCloseClick}>Cerrar</button>
    </div>
    
    

</div>
)
}

export default Buscador