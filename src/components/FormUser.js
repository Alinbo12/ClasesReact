import React, { useEffect, useState } from "react";

// const para agregar usuario
const initialUsuario = {
  nombre: "",
  apellido: "",
  correo: "",
  rut: ""
}

const FormUserComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, correo, rut } = usuario
  //el useEffect siempre está pendiende de si la variable que tiene dentro de sus corchetes cambia,
  //éste deberá hacer todo lo que tienen en su función dentro.
  //ENCONSIDERACIÓN: useEffect siempre corre al menos una vez cuando la página carga por primera vez.
  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado)
    } else {
      setUsuario(
        {
          nombre: "",
          apellido: "",
          correo: "",
          rut: ""
        }
      )
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value
    }
    setUsuario(changedFormValue);
  }

  return (
    <div class="card container mb-2">
      <form>
        {/* hacemos que el mensaje del formulario sea dinamico segun si queremos editar o ingresar */}
        {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}
        <div class="mb-3" >
          <label class="form-label" for="id">Rut</label>
          <input class="form-control" placeholder="12345678-9" type="text" id="rut"
            name="rut" value={rut} onChange={handleInputChange} />
        </div>
        <div class="mb-3" >
          <label class="form-label" for="id">Nombre</label>
          <input class="form-control" placeholder="Elba" type="text" id="nombre"
            name="nombre" value={nombre} onChange={handleInputChange} />
        </div>
        <div class="mb-3" >
          <label class="form-label" for="id">Apellido</label>
          <input class="form-control" placeholder="Zurita" type="text" id="apellido" name="apellido"
            value={apellido} onChange={handleInputChange} />
        </div>
        <div class="mb-3" >
          <label class="form-label" for="id">Correo</label>
          <input class="form-control" placeholder="elbazurita@correo.cl" type="email" id="correo"
            name="correo" value={correo} onChange={handleInputChange} />
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
          /*          dos puntos para decir qué va en casa situación, dependiendo de si la sentencia "usuarioEditado !== null" 
          es verdadera o no  */
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}

        {usuarioEditado !== null ?  <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar 
          </button> : ( <></> ) }

        <br />
      </form>
    </div>
  )
}

export default FormUserComponent;