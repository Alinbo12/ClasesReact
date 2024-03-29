import React from "react";
import BotonComponent from "./Boton";

const TableUserComponent = ({ usuarios, deleteUser, setUsuarioEditado }) => {
    return (
        <div class="card container mb-2">
            <h2>Tabla Usuarios</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Rut
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Correo
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
                    {usuarios.map(usuario => (
                        <tr>
                            <td> {usuario.rut} </td>
                            <td> {usuario.nombre} </td>
                            <td> {usuario.apellido}</td>
                            <td> {usuario.correo} </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => {
                                        deleteUser(usuario.rut);
                                    }}
                                > Eliminar
                                </button>
                                &nbsp;
                                <button
                                    type="button"
                                    class="btn btn-warning"
                                    onClick={() => {
                                        setUsuarioEditado(usuario)
                                    }}
                                > Editar
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TableUserComponent;