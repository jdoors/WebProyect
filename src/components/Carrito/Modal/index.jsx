import React from 'react'

const Modal = ({children, setVisible}) => {
    const handleClick = ()=>{
        setVisible(false);
    };
    return (
        
    <div className='flex flex-col fixed top-[5%] left-[25%] sm:left-[35%]  z-80 p-8 bg-white shadow-xl  shadow-orange-400 '>
       
        <button className='pt-0 ml-auto ' onClick={()=> handleClick()}> <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg>
 </button>
        {children}
</div>
  )
}

export default Modal