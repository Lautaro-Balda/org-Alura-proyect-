import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import React from 'react'
 
const Colaborador = (props) =>{
    const { nombre,puesto,foto,id,fav } = props.datos
    const { eliminarColaborador, colorPrimario, like } = props;

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar'/>
        <div className="encabezado" style={ {backgroundColor:colorPrimario} }>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color='red' onClick={ () => like(id)}/> : <AiOutlineHeart onClick={ () => like(id)} />}
            
            
        </div>
    </div>
}

export default Colaborador