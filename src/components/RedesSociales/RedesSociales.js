import React from 'react';
import RedesSociales from "./Imagen/RedesSociales.jpg";

const SocialMedia = () => {
    return (
        <div className='mt-10 relative flex flex-wrap justify-evenly'>
            <div>
                <img className="object-cover h-[260px] w-screen filter grayscale" src={RedesSociales} />
            </div>

            <div className='font-cormorant text-5xl font-[1000] top-[20%] absolute text-[#FF8126] text-center'>
                <h1>
                    Compartilo con tus amigos
                </h1>
            </div>
        
        </div>
        
        
    )
}

export default SocialMedia




