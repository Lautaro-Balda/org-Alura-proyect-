import Colaborador from '../colaborador';
import './Equipo.css'
import React from 'react'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    const {colorPrimario, titulo, id} = props.datos;
    const { colaboradores,eliminarColaborador,actualizarColorDeEquipo } = props;

 


    return <>
        {   colaboradores.length > 0 &&
            <section className="equipo" style={ {backgroundColor: hexToRgba(colorPrimario, 0.6)} }>
                <input type="color" 
                className='input-color'
                value={colorPrimario}
                onChange={ (evento) => {
                    actualizarColorDeEquipo(evento.target.value, id)
                } }
                />
                <h3 style={ {borderColor:colorPrimario } }>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={props.like}
                        /> )
                    }
                </div>
            </section>
        }   
    </>

}

export default Equipo

