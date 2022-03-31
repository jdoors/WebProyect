import React from 'react'
import RoyalCanin from './Image/RoyalCanin.jpg'
import PelotaPerro from './Image/PelotaPerro.jpg'
import ComederoPerro from './Image/ComederoPerro.jpg'
import Hueso from'./Image/Hueso.jpg'


export const productsListDog =[
    { id:"1" , name:"RoyalCanin" ,price: 100 ,img:RoyalCanin },
    { id:"2" , name:"Pelota Perro", price: 100, img:PelotaPerro },
    { id:"3" , name:"Comedero Perro", price: 100, img :ComederoPerro},
    { id:"4" , name:"Hueso", price: 100, img:Hueso},
]

const PerrosProductos = ({data}) => {

    const { name, price , img }  = data

return (
    
    <div className='grid auto-row-min pt-20'>

        <div className=' w-3/5 h-3/5'>
        <img src={img}alt={name}/>
        </div>
    
        <div className=' text-justify text-lg mt-12'>
            <h3 className='ml-8'>{name}</h3>
            <p className='text-slate-900 mt-1 ml-8'>${price}.00</p>
            <button className='bg-slate-300 border-inherit rounded font-bold w-[150px] mt-2'>Comprar</button>
        </div>
        
    </div>

)}

export default PerrosProductos