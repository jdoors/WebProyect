import React from 'react'

const Error404 = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center mt-6">
        <div className="font-poppins m-8 text-sm sm:text-xl text-center text-orange-500 font-semibold">
            <p>Lo sentimos, la página seleccionada fue modificada o todavía no ha sido creada. Pero no te preocupes, podés volver a nuestra página principal con sólo un click.</p>
        </div>
        <div className="font-poppins font-extrabold text-9xl m-6">
            <span className="text-red-400 animate-pulse">4</span>
            <span className="mx-10 text-green-500 animate-pulse">0</span>
            <span className="text-amber-400 animate-pulse">4</span>
        </div>
        <button className="bg-blue-500 text-white border-1 px-4 py-2 rounded-md mb-20 font-medium">
            <a href="/">Volver a la página principal</a>
        </button>
    </div>
  )
}

export default Error404