import React from 'react';
import '../../../assets/styles/MainFilter.scss';

const MainFilter = () => {
    const cat = ['Todos', 'Hamburguesas', 'Sushi', 'Tacos', 'Café', 'Pizza', 'Hotdogs'];
    return(
        <div className="main-filter">
            <div className="columns">
                <div className="colum">
                    {
                        cat.map((item)=> (
                            <button class="button is-outlined">{item}</button>
                        ))
                    }  
                </div>
            </div>
        </div>
    )
}

export default MainFilter;