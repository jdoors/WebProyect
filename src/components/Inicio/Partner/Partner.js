import React from 'react'
import fondoRoyalCanin from './Images/Fondo.png'
import PartnerRoyalCanin from './Images/RoyalCaninLogo.png'

const Partner = () => {

  return (
    <div className='w-full h-[300px] sm:h-[395px] bg-[#6090C3] mt-5' style={{backgroundImage: `url(${fondoRoyalCanin})`}}>
        <div className='flex flex-col items-center'>
            <h2 className='font-cormorant text-3xl text-center sm:text-[40px] font-bold text-white -mb-7 mt-14'>Distribuidor Oficial de Royal Canin</h2>
            <img className='w-44 sm:w-64 -mb-7' src={PartnerRoyalCanin}/>
            <button className='bg-[#FF8126] text-white rounded w-60 sm:w-[330px] h-8 sm:h-11 text-sm sm:text-lg font-medium font-poppins'>Ver productos exclusivos</button>
        </div>
    </div>
  )
}

export default Partner