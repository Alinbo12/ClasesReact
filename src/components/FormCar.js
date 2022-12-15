import React from "react";
import BotonComponent from "./Boton";

const FormCarComponent = () => {
    return (
        <div>


            <center>
                <h1>Registro Automóvil</h1>
                <center>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/1906Ariel.jpg" alt="Esta es una imagen que no ha cargado como deberia" width="30%" height="30%"></img>
                </center>
                <div class="row">

                    <div class="col"> <input type="text" class="form-control" placeholder="Marca" aria-label="Marca"></input>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Año" aria-label="Año">
                        </input>
                    </div>
                </div>
            </center>
        </div>

    )
}

export default FormCarComponent;