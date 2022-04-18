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

<div className='bg-[#E5E5E5] w-full flex justify-center pt-24 pb-8 '>

    <form className='px-24 pt-6 pb-8 mb-4 bg-white rounded md ' >

        <div >
            <label className='text-sm font-medium '>
                <h2 className='w-full md:flex md:items-center'> Iniciar Sesion </h2>
                <input type="email" value={email} onChange={cambioDeEmail} className='w-full py-2 mb-6 border border-red-200 rounded shadow appearance-none '></input>
            </label>
        </div>

        <div>
            <label className='mb-2 text-sm font-medium '>
                <h2 className='w-full md:flex md:items-center'>Password</h2>
                <input type="password" value={password} onChange={cambioDePassword} className='w-full py-2 mb-6 border border-red-200 rounded shadow appearance-none ' ></input>
            </label>
        </div>

        <div className='flex justify-center '>
            <button className='px-4 py-2 font-bold text-white bg-[#FF8126] rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline'type="boton" value={boton} onClick={cambioEnviar}>Enviar</button>
        </div>
    </form>
</div>
)
}

export default Login