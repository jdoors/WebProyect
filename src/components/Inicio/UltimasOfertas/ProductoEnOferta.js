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
        <div className='producto-en-oferta w-64 h-80 text-center mt-10 items-center'>
            <div>
                <img className='object-cover w-64 h-40 rounded-t-2xl' src={img} alt={name}/>
            </div>
            <div className='grid col-auto justify-center h-40 bg-red-50 rounded-b-2xl'>
                <h4 className='font-medium text-lg mt-5'>{name}</h4>
                <h5 className='text-2xl font-semibold text-orange-500 pb-2'>${price}.00 <span className='text-gray-500 line-through text-lg font-normal'>${oldPrice}.00</span></h5>
                <button className='bg-orange-500 text-white rounded w-56 h-10'>Quiero esta oferta</button>
            </div>
        </div>
    )
}

export default ProductoEnOferta