import React from "react";
import { Titulo } from "../constants/Constants";
import "../css/Header.css"



export const Header =()=>{
    return(
        <div className="Header">

        <hr/>
        <br />
        <br />
        <h1>
            {Titulo}
        </h1>
        <br />
        <br />
        <hr />

        </div>
    )
 }
 