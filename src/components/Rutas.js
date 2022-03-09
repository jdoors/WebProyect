
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Footer from "./footer"
import Contactos from "./Pages/Contactos"
import Gatos from "./Pages/Gatos"
import Home from "./Pages/Home"
import Perros from "./Pages/Perros"



const Rutas = () => {
return (
    <>
        <Router>
            <header>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>                
                    <Route path="/perros" element={<Perros/>}/>
                    <Route path="/gatos" element={<Gatos/>}/>
                    <Route path="/contactos" element={<Contactos/>}/>
                </Routes>
            </header>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
            <footer>
                <Footer/> 
            </footer>
        </Router>
    </>
)
}

export default Rutas