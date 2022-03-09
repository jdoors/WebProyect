import React from 'react';
import RedesSociales from "./Imagen/RedesSociales.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faInstagram, faTelegram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className='relative flex flex-wrap mt-10 justify-evenly'>
            
            <div>
                <img className="object-cover h-[260px] w-screen filter grayscale" src={RedesSociales} />
            </div>

            <div className='font-cormorant text-5xl font-[1000] top-[10%] absolute text-[#FF8126] text-center'>
                <h1>
                    Compartilo con tus amigos
                </h1>
            </div>

            <div className="absolute top-[60%] text-5xl text-[#FF8126]">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faFacebookMessenger} />
                <FontAwesomeIcon icon={faTelegram} />
            </div>

        
        </div>
        
        
    )
}

export default SocialMedia




