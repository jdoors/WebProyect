import React from 'react';
import RedesSociales from "./Imagen/RedesSociales.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faInstagram, faTelegram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className='relative flex flex-wrap justify-evenly'>
            
            <div>
                <img className="object-cover h-[260px] w-screen filter grayscale" src={RedesSociales} />
            </div>

            <div className='font-cormorant text-4xl md:text-6xl font-[1000]  mt-12 absolute text-[#FF8126] text-center'>
                <h1>
                    Compartilo con tus amigos
                </h1>
            </div>

            <div className="absolute top-[55%] text-[#FF8126] flex flex-wrap justify-evenly">
                
                <div><FontAwesomeIcon icon={faFacebook} className="mr-8 text-4xl md:text-6xl" /></div>
                <div><FontAwesomeIcon icon={faInstagram} className="mr-8 text-4xl md:text-6xl" /></div>
                <div><FontAwesomeIcon icon={faTwitter} className="mr-8 text-4xl md:text-6xl" /></div>
                <div><FontAwesomeIcon icon={faWhatsapp} className="mr-8 text-4xl md:text-6xl" /></div>
                <div><FontAwesomeIcon icon={faFacebookMessenger} className="mr-8 text-4xl md:text-6xl" /></div>
                <div><FontAwesomeIcon icon={faTelegram} className="text-4xl md:text-6xl" /></div>

            </div>

        
        </div>
        
        
    )
}

export default SocialMedia




