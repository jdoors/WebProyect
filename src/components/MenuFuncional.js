import React, { useState } from 'react'
import MenuHamb from './MenuHamb';
import Navbar from './navbar';


const [open , setOpen] = useState(false);

const handleClick = () => {
    setOpen(!open);

};

const MenuFuncional = () => {
return (
    <div>
        <Navbar handleClick={handleClick}/>{open && <Navbar/>}
    </div>
)
}

export default MenuFuncional