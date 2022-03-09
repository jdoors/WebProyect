import React from 'react'
import CamaGato from './Images/CamaGato.jpg'
import CuchaPerroMediano from './Images/CuchaPerroMediano.jpg'
import CamaColganteGato from './Images/CamaColganteGato.jpg'
import RoyalCaninPuppySmall10kg from './Images/RoyalCaninPuppySmall10kg.jpg'

export const ofertas = [
    {id:1, name: "Cama Gato", price: 4200, oldPrice: 4500, img: CamaGato},
    {id:2, name: "Cucha Perro Mediano", price: 4800, oldPrice: 5100, img: CuchaPerroMediano},
    {id:3, name: "Cama Colgante Gato", price: 3400, oldPrice: 3700, img: CamaColganteGato},
    {id:4, name: "Royal Canin Puppy 10kg", price: 5400, oldPrice: 5700, img: RoyalCaninPuppySmall10kg}
]; 

const ProductoEnOferta = ({data}) => {
     
    const {name, price, oldPrice, img} = data;

    return (
        <div className='font-poppins w-[270px] h-[332px] text-center mt-10 items-center'>
            <div>
                <img className='object-cover w-[270px] h-40 rounded-t-2xl' src={img} alt={name}/>
            </div>
            <div className='grid col-auto justify-center h-40 bg-[#F7F5F0] rounded-b-2xl'>
                <p className='font-medium text-lg mt-5'>{name}</p>
                <p className='text-2xl font-semibold text-[#FF8126] pb-[5px]'>${price}.00 <span className='text-gray-500 line-through text-lg font-normal'>${oldPrice}.00</span></p>
                <button className='bg-[#FF8126] text-white rounded w-[230px] h-10 mb-6'>Quiero esta oferta</button>
            </div>
        </div>
    )
}

export default ProductoEnOferta