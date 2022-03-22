import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [boton,setBoton] =useState();

    const cambioDeEmail= (e) =>{
        setEmail (e.target.value);
    }

    const cambioDePassword= (e) =>{
        setPassword (e.target.value);
    }

        const cambioEnviar= (e) =>{
        setBoton(e.target.value);
    }
return (

<div className='bg-[#E5E5E5] w-full flex justify-center pt-16 pb-8 '>

    <form className='bg-white md rounded px-24 pt-6 pb-8 mb-4 ' >

        <div >
            <label className='text-sm font-medium '>
                <h2 className='w-full md:flex md:items-center'> Iniciar Sesion </h2>
                <input type="email" value={email} onChange={cambioDeEmail} className=' shadow appearance-none border border-red-200 rounded w-full mb-6 py-2 '></input>
            </label>
        </div>

        <div>
            <label className=' text-sm font-medium mb-2'>
                <h2 className='w-full md:flex md:items-center'>Password</h2>
                <input type="password" value={password} onChange={cambioDePassword} className=' shadow appearance-none border border-red-200 rounded w-full mb-6 py-2 ' ></input>
            </label>
        </div>

        <div className=' flex justify-center '>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'type="boton" value={boton} onClick={cambioEnviar}>Enviar</button>
        </div>
    </form>
</div>
)
}

export default Login