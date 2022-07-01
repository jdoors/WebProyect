import React from 'react'
import { Link } from 'react-router-dom'


export const ofertas = [
    {id:1, name: "Pelota Gato", price: 200, oldPrice: 500, img: "https://i.ibb.co/TPhdgz3/Pelota-Gato.jpg"},
    {id:2, name: "Comedero Gato", price: 300, oldPrice: 600, img: "https://i.ibb.co/P5bLqjr/Comedero.jpg"},
    {id:3, name: "Hueso", price: 100, oldPrice: 350, img: "https://i.ibb.co/C90DgNr/Hueso.jpg"},
    {id:4, name: "Pelota Perro", price: 100, oldPrice: 250, img: "https://i.ibb.co/JQSTFFr/Pelota-Perro.jpg"}
]; 

const ProductoEnOferta = ({data}) => {
     
    const {name, price, oldPrice, img} = data;

    return (
        <div className='font-poppins w-[270px] h-[332px] text-center mt-10 items-center'>
            <div>
                <img className='object-cover w-[270px] h-40 rounded-t-2xl' src={img} alt={name}/>
            </div>
            <div className='grid col-auto justify-center h-40 bg-[#F7F5F0] rounded-b-2xl'>
                <p className='mt-5 text-lg font-medium'>{name}</p>
                <p className='text-2xl font-semibold text-[#FF8126] pb-[5px]'>${price}.00 <span className='text-lg font-normal text-gray-500 line-through'>${oldPrice}.00</span></p>
                <button className='bg-[#FF8126] text-white rounded w-[230px] h-10 mb-6'>
                <Link to="/Productos">Quiero esta oferta</Link>
                </button>
            </div>
        </div>
    )
}

export default ProductoEnOferta