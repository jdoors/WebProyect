import React from 'react';
import RedesSociales from "./Imagen/RedesSociales.jpg";

const SocialMedia = () => {
    return (
        <div className='mt-10 relative flex flex-wrap justify-evenly'>
            <div className='font-cormorant font-bold text-6xl top-[50%] absolute'>
                <h1>
                    Compartilo con tus amigos
                </h1>
            </div>
            <div className="">
                <img className="" src={RedesSociales} />
            </div>
            
        </div>
        
        
    )
}

export default SocialMedia




