import React from "react";

const TableCarComponent = () => {
    return (
        <div>
        <h1> Tabla registro Automoviles</h1>
        <table class="table table-success table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Año</th>
                    <th scope="col">Patente</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">2344</th>
                    <td>hk</td>
                    <td>1991</td>
                    <td>kj hj 78</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">2366</th>
                    <td>hd</td>
                    <td>1780</td>
                    <td>kk cc 88</td>
                    <td>8</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td colspan="2"></td>
                    <td>cc xx 33</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TableCarComponent