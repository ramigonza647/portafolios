import React from 'react'
import Ramiro from "../assets/Ramiro.jpg"
import "../css/Main.css"

export const Main = () => {

    const Alumno = {

        nombre: "Ramiro",
        apellido: "Gonzalez",
        edad: 21,
        hobby: "Basquet",
        direccion: "bella vista",
        telefono: "3815282461"


    }


    return (
        <div className='Main'>
            <br />
            <h3>Mi nombre es: {Alumno.nombre} {Alumno.apellido}</h3>
            
            <br />
            <div className='col-4'> 
                <ul>
                <li>Edad: {Alumno.edad} </li>
                <li>Hobby: {Alumno.hobby} </li>
                <li>Direccion: {Alumno.direccion} </li>
                <li>Telefono: {Alumno.telefono} </li>
            </ul>
            </div>
            

        </div>
    )
}
