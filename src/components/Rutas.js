
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import Navbar from "./navbar"
import Footer from "../components/Footer/footer"
import TellAFriend from "./TellAFriend"



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
                <TellAFriend/>
                <Footer/> 
            </footer>

        </Router>
    </>
)
}

export default Rutas