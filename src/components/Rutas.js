
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Footer from "./footer"
import RedesSociales from "./RedesSociales/RedesSociales"



const Rutas = () => {
return (
    <>
        <Router>
            <header>
                <Navbar/>
            </header>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
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