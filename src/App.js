import React from "react";
//nos permiten hacer la navegación de nuestra web
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AutoPage } from "./pages";
import VerificatePage from "./pages/Verificate";

// el App es nuestro Main. El enfoque es que tendrá todas las urls
const App = () => {
    return(
        //desde el navegador
        <BrowserRouter>
            {/* vamos a tener distitnas rutas */}
            <Routes>
                {/* especificamos cada ruta */}
                <Route path="/" element = { <HomePage/>}/>
                <Route path="/Auto" element = { <AutoPage/>}/>
                <Route path="/Verificate" element = { <VerificatePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

