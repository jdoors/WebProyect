
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio/Inicio"
import navbar from "./navbar"
import Footer from "./footer"
import TellAFriend from "./TellAFriend"


const Rutas = () => {
  return (
    <>
        <Router>
            <header>
                <navbar/> 
                {/* No está tomando bien el link a navbar */}
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