import React from "react";

const PopUpComponent = ({masBoton, handleOnClick}) => {
    return (
        <div>
         <button type="button" class="btn btn-lg btn-danger" onClick2={()=>{
           handleOnClick();}} data-bs-toggle="popover" data-bs-title="Popover title" 
        data-bs-content="And here's some amazing content. 
        It's very engaging. Right?"> {masBoton} Click aquí para enviar </button>
        </div>
    )
}

export default PopUpComponent;


