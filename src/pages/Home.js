import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormUserComponent, TableUserComponent, BotonComponent } from "../components";



const usuario1 = [
    {
        nombre: 'Joseph',
        apellido: 'Joestart',
        correo: 'jo.jo@gmail.com',
        rut: '9563874-3'
    },

    {
        nombre: 'Josuke',
        apellido: 'Higashikata',
        correo: 'jo.hi@gmail.com',
        rut: '17379045-k'
    },

    {
        nombre: 'arigatito',
        apellido: 'chabelita',
        correo: 'ari.chai@gmail.com',
        rut: '1fjsof9045-k'

    }
]

//Arrow function
const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
    // en este momento State vale lo mismo que usuario 1.
    //la función por dentro generar una función setteadora que me va a permitir cambiar los datos de usuario 1 sin afectart directamente
    //es decir, podemos manipular datos de usuario 1 sin perjudicar nada.
    const [user, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    //funcionar para eliminar usuario
    const userDelete = (rutUsuario) => {
        const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
        // al momento de ocupar la función setState, yo le voy a cambiar el valor temporal a mis uriaisls

        setState(changeUser);
    }
    //se agregua un usuario con el formato
    const userAdd = (usuario) => {
        const addUsuario = [
            //... es mantener los datos que hay en user, que agregue lo que le entrego acá
            ...user, usuario
        ]
        setState(addUsuario)
    } //se termina eso en el formulario, que es donde agregamos usuarios.
    const userEdit = (usuarioEditado) =>{
        const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario))
        
        setState(editUser)
    }

    return (
        <div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col">
                        <FormUserComponent 
                        userAdd={userAdd} 
                        usuarioEditado={usuarioEditado}
                        setUsuarioEditado={setUsuarioEditado}
                        userEdit={userEdit} />
                    </div>
                </div>
                <BotonComponent infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />
                <hr />
                <div class="row">
                    <div class="col">
                        <TableUserComponent usuarios={user} deleteUser={userDelete} 
                        setUsuarioEditado={setUsuarioEditado}/>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomePage;