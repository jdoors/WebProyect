import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


const Perros = () => {

    const productos=[
        { id:"1" , text:"Royal Canin" ,text2: "Pelota", text3:"Collares", text4:"Comederos"},
        { id:"2" , text:"Vitalcan", text2:"Peluches",text3:"Arnes",text4:"Bebederos" },
        { id:"3" , text:"Eukanuba" ,text2:"Huesos",text3:"Ropa"},
        { id:"4" , text:"Dog Chow", text2:"Mordibles" ,text3:"Bolsos Transportadores"},
        
]
return (
    <div className='items-center justify-between flex flex-wrap bg-[#E5E5E5] px-12 py-10 my-0 mx-auto'>
        <div >
            <a href='#'><h2 className='font-medium'>Alimentos</h2></a>          
            <br></br>
            <ul>
            {productos.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>
        </div>
        
        <div >
            <a href='#'> <h2 className='font-medium'>Juguetes</h2></a>
            <br></br>
            <ul>
        {productos.map(item => (
            <li key={item.id}>{item.text2}</li>
        ))}     
            </ul>

        </div>

        <div >
            <a href='#'><h2 className='font-medium'>Productos de Paseo</h2></a>
            <br></br>
            <ul>
        {productos.map(item =>(
            <li key={item.id}>{item.text3}</li>
        ))}
            </ul>
        </div>

        <div>
            
            <a href='#'><h2 className='font-medium'>Bebederos y Comederos</h2></a>
            <br></br>
            <br></br>
            <br></br>
            <ul>
        {productos.map(item =>(
            <li key={item.id}>{item.text4}</li>
        ))}
            </ul>
            
        </div>
    </div>
)
}

export default Perros