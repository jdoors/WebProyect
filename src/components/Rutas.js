
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Contactos from "./Pages/Contactos"
import Gatos from "./Pages/Gatos"
import Home from "./Pages/Home"
import Perros from "./Pages/Perros"
import Login from "./Pages/Login"
import Carrito from "./Pages/Carrito"
import Footer from "../components/Footer/footer"
import RedesSociales from "./RedesSociales/RedesSociales.js"
import FreeDelivery from "./Inicio/FreeDelivery.js"


const Rutas = () => {
return (
    <>
        <Router>
            <header>
                <FreeDelivery/>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>                
                </Routes>
            </header>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/perros" element={<Perros/>}/>
                <Route path="/gatos" element={<Gatos/>}/>
                <Route path="/contactos" element={<Contactos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
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