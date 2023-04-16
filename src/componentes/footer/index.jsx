import './Footer.css'
import React from 'react'

const Footer = () =>{

    return <footer className="footer" style={ {backgroundImage: "url(/img/Rectangle1.png)"} }>
        <div className="redes">
            <a href="https://aluracursos.com">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://aluracursos.com">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://aluracursos.com">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Lautaro Balda</strong>
        </footer>
}

export default Footer


