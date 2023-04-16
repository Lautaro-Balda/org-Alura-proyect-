import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import Miorg from './componentes/miOrg';
import Equipo from './componentes/Equipo';
import React from 'react';
import Footer from './componentes/footer';
import { v4 as uuid } from 'uuid';


function App() {

const [mostrarFormulario, actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([
  {
      id: uuid(),
      "nombre": "Lautaro Balda",
      "puesto": "Estudiante",
      "foto": "https://i1.sndcdn.com/avatars-ognPrWBVun4Bp1rM-tndvhA-t500x500.jpg",
      "equipo": "Front End",
      fav:true
  },
  {
    id: uuid(),
    "nombre": "Gonzalo Adami",
    "puesto": "Estudiante",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkYSxt3u-aPS2gVNTs3Op9ufwK8MA6LNrJw&usqp=CAU",
    "equipo": "Programación",
    fav:false
  },
  {
    id: uuid(),
    "nombre": "LEO MESSI",
    "puesto": "FULBOLISTA",
    "foto": "https://i.pinimg.com/originals/b4/60/47/b46047c609901b83e76030b1473c186b.jpg",
    "equipo": "Móvil",
    fav:false
  },
  {
    id: uuid(),
    "nombre": "Alberto Fernández",
    "puesto": "Presi",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8w5Y6S3jzKeFN2I1TeRYSWr7OeR1ZibRqA&usqp=CAU",
    "equipo": "Data Science",
    fav:false
  },
  {
    id: uuid(),
    "nombre": "Goku",
    "puesto": "Goku",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ljuYT_8HbBJUfen4pVsaR6zL6411sXECkA&usqp=CAU",
    "equipo": "Devops",
    fav:false
  }])
const [equipos, ActualizarEquipos] = useState([
  {
    id: uuid(),
    titulo:"Programación",
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    id: uuid(),
    titulo:  "Front End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },  
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },  
  {
    id: uuid(),
    titulo:  "Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },  
  {
    id: uuid(),
    titulo:  "UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  },  
  {
    id: uuid(),
    titulo:  "Móvil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  {
    id: uuid(),
    titulo:  "Innovación y  Gestión",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  }
])

const cambiarMostrar = () =>{
  actualizarMostrar(!mostrarFormulario)
}

const registrarColaborador =  (colaborador) =>{
  actualizarColaboradores([...colaboradores, colaborador])
} 

const eliminarColaborador = (id) =>{
  console.log("Elimiar colaborador", id)
  const nuevosColaboradores = colaboradores.filter( colaborador => colaborador.id !== id )
  actualizarColaboradores(nuevosColaboradores)
}

const actualizarColorDeEquipo = (color, id) =>{
  const equiposActualizados = equipos.map( (equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  ActualizarEquipos(equiposActualizados)
}

const crearEquipo = (nuevoEquipo) =>{
  ActualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

const like = (id) =>{
  const colaboradoresActualizados = colaboradores.map( (colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario ? <Formulario titulo="Rellena el formulario para crear el colaborador."/> : <></> } */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map( (equipo) => equipo.titulo )} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      <Miorg cambiarMostrar={cambiarMostrar}/>
      { equipos.map( (equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo} 
      colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColorDeEquipo={actualizarColorDeEquipo}
      like={like}
      /> 
      ) }
      <Footer />

    </div>
  );
}

export default App;
