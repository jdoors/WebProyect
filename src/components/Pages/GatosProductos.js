
import React from 'react'
import RoyalCanin from './Image/RoyalCanin.jpg'
import PelotaGato from './Image/PelotaGato.jpg'
import Comedero from './Image/Comedero.jpg'
import RascadorGato from'./Image/RascadorGato.jpg'


export const productsList =[
    { id:"1" , name:"Vitalcan" ,price: 100 ,img:RoyalCanin },
    { id:"2" , name:"Pelota", price: 100, img:PelotaGato },
    { id:"3" , name:"Comedero", price: 100, img :Comedero},
    { id:"4" , name:"Rascador", price: 100, img:RascadorGato},
]

const GatosProductos = ({data}) => {

    const { name, price , img }  = data

return (
    
    <div className='grid auto-row-min pt-20'>

        <div className=' w-3/5 h-3/5'>
        <img src={img}alt={name}/>
        </div>
    
        <div className=' text-justify text-lg  mt-12'>
            <h3 className='ml-8'>{name}</h3>
            <p className='text-slate-900 mt-1 ml-8'>${price}.00</p>
            <button className='bg-slate-300 border-inherit rounded font-bold w-[150px] mt-2'>Comprar</button>
        </div>
        
    </div>

)}

export default GatosProductos