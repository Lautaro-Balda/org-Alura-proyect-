import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"
import { useState } from "react"
import React from "react"

const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo,actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador,crearEquipo } = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        const datosAEnviar = {
            // nombre:nombre,
            // puesto:puesto,
            // foto:foto
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)

    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        const datosAEnviar = {
            titulo,
            colorPrimario: color,
        }
        crearEquipo(datosAEnviar)

    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />

            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />

            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de la foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
                valor={equipo}
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un equipo.</h2>

            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <Campo 
                type="color"
                titulo="Color" 
                placeholder="Ingresar el color en hexadecimal" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario