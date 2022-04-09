

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Contactos from "./Pages/Contactos"
import Gatos from "./Pages/Gatos"
import Perros from "./Pages/Perros"
import Login from "./Pages/Login"
import ShoppingCart from "./Carrito/ShoppingCart"
import RedesSociales from "./RedesSociales/RedesSociales.js"
import FreeDelivery from "./Inicio/FreeDelivery.js"
import Footer from "../components/Footer/footer"


const Rutas = () => {
return (
    <>
        <Router>
            <header>
                <FreeDelivery/>
                <Navbar/>
            </header>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/perros" element={<Perros/>}/>
                <Route path="/gatos" element={<Gatos/>}/>
                <Route path="/contactos" element={<Contactos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
            </Routes>

            <footer>
                <RedesSociales/>
                <Footer/> 
            </footer>
        </Router>
    </>
)
}

export default Rutas