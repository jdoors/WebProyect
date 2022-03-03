
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Footer from "./footer"



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
                <Footer/> 
            </footer>
        </Router>
    </>
)
}

export default Rutas