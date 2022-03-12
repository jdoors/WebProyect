
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Footer from "../components/Footer/footer"
import FreeDelivery from "./Inicio/FreeDelivery"
import PorqueElejirnos, { caracteristicas } from "./WhyChoose"
import RedesSociales from "./RedesSociales/RedesSociales.js"
import DescubrirMarcas from "./DescubrirMarcas/DescubrirMarcas"



const Rutas = () => {
return (
    <>
        <Router>
            <header>
                <FreeDelivery/>
                <Navbar/>
                <DescubrirMarcas/>
            </header>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
            <footer>
                <PorqueElejirnos>{caracteristicas}</PorqueElejirnos>
                <RedesSociales/>
                <Footer/> 
            </footer>

        </Router>
    </>
)
}

export default Rutas