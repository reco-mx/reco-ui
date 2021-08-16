import React, {useState} from 'react';
import '../../../assets/styles/MainFilter.scss';

const MainFilter = () => {
    const cat = ['Todos', 'Hamburguesas', 'Sushi', 'Tacos', 'Café', 'Pizza', 'Hotdogs'];
    const [category, setCategory] = useState('Todos')
    const style = {
        background:'black',
        color:'white'
    }
    const setFilter = (cat) => {
        setCategory(cat);
    }
    return(
        <div className="main-filter">
            <div className="columns">
                <div className="column">
                    {
                        cat.map((item)=> (
                            <button style={category === item?style: null } class="button is-outlined" onClick={()=>{setFilter(item)}}>{item}</button>
                        ))
                    }  
                </div>
            </div>
        </div>
    )
}

export default MainFilter;