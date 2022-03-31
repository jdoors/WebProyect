import React, { useState } from 'react'


const FreeDelivery = () => {

  const [visible, setVisible] = useState(true)

  return (
   
    <div>
      {visible && (
          <div visible={visible} setVisible={setVisible} className='bg-[#C2E8CE] h-[50px] grid grid-cols-6 sm:flex sm:flex-wrap items-center sm:justify-center'>
            <h6 className='col-span-5 ml-2 text-sm font-medium font-poppins'>Envíos gratis a todo el país para compras mayores a $10000.00</h6>
            <div onClick={() => setVisible(false)}  className='button-lines flex flex-col justify-between w-[15px] h-[12px] right-6 absolute col-span-1 sm:right-14 cursor-pointer'>
              <span className='line-t h-[2px] w-full rounded-lg bg-black origin-[0%_0%] rotate-45'></span>
              <span className='line-b h-[2px] w-full rounded-lg bg-black origin-[0%_100%] -rotate-45'></span>
            </div>
          </div>
        )
      }
    </div>
    
  )
}

export default FreeDelivery