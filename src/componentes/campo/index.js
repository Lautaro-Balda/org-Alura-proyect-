import './Campo.css'
import React from 'react'

const Campo = (props) =>{

    const { type = "text"} = props

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        type={type}
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}

        />
    </div>
}

export default Campo