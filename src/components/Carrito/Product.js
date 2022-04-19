import React,{useState} from 'react';
import Modal from './Modal';

const Product = ({data, addToCart}) => {

    const {id, name, price,img } = data; 
    const [visible,setVisible] = useState(false)

    return (
      
        <div className="font-poppins w-[270px] h-[332px] text-center mt-10 items-center ">
             
            <div>
                <img className='ml-10 object-fit w-44 h-36' src={img} alt="imagen"/>
            </div>
            
            <div className='grid col-auto justify-center h-40 bg-[#F7F5F0] rounded-b-2xl'>
                <h4 className='mt-5 text-lg font-medium'>{name}</h4>
                <h5 className='text-2xl font-semibold text-[#FF8126] pb-[5px]'>${price}.00</h5>
                
                <button className="bg-[#FF8126] text-white rounded w-[230px] h-10 mb-6" onClick={() => {const secontEvent = setVisible(true)}}>Ver más</button>
               
                </div>
                
            {visible && (
               
                <Modal visible= {visible} setVisible={setVisible}  >
                    
                <h1 className='sm:space-y-4 sm:text-2xl text-lg  space-y-2 font-semibold font-poppins'>{name}</h1>
                <div >
                <img className='sm:w-[280px] sm:h-[230px] w-[250px] h-[200px]' src={img}/> 
                </div>
                <div >
                <p>Producto de la mejor calidad</p>
                </div>
                <div>
                <button className="sm:px-4 sm:py-2 sm:mt-4 px-2 py-1 mt-2 font-semibold text-orange-700 bg-transparent border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent font-poppins"
                  onClick={() => { const firstEvent=addToCart(data)}}>Agregar</button>
                </div>
                
                
                </Modal>
               
               
             )}
             
        </div>
       
    )
}

export default Product