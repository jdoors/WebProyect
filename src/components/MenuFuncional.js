import React, { useState } from 'react'
import MenuHamb from './MenuHamb';
import Navbar from './navbar';




const MenuFuncional = () => {

    const [open , setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    
    };

return (
    <div>
        <Navbar handleClick={handleClick}/>
        {open && <MenuHamb/>}
    </div>
)
}

export default MenuFuncional