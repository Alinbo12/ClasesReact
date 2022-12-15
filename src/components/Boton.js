import React from "react";

//botón dinámico
const BotonComponent = ({infoBoton, handleOnClick}) => {
    return (
        <div class="d-grid gap-2 d-md-block">
            <button 
            class="btn btn-primary" 
            onClick={()=>{
                handleOnClick();
            }}
            type="button">{infoBoton}</button>
        </div>
    )
}

export default BotonComponent;