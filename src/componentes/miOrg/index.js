import React from 'react'
import "./MiOrg.css"



const Miorg = (props) =>{

    // const [mostar, actualizarMostrar] = useState(true)

    // // const manejarClick = () =>{ 
    // //     console.log("Mostrar/ocultar elemento")
    // //     actualizarMostrar(!mostar)
    // // }

    return <section className='orgSection'>
        <h3 className='title'>Mi oganización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar} />
    </section>
}

export default Miorg