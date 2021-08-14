import React from 'react';
import './Banner.scss'
import { HiSearch } from "react-icons/hi";
const Banner = () => {
    return(
        <div>
            <div className='banner'>
                <div className='title'>
                    <h3>
                        Te recomendamos lo que no sabías que querías
                    </h3>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="¿Qué estás buscando?"/>
                        <span className="icon is-small is-left">
                        <HiSearch/>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;