import React, {useState} from 'react';
import './placeForm.scss';
import Autocomplete from '../shared/Autocomplete/Autocomplete'
import { FiX } from "react-icons/fi";

import { db } from '../../firebase';
const PlaceForm = () => {
    const [placeData, setPlaceData] = useState({
        name:'',
        location:'',
        ig:'',
        fb:'',
        tags:[]
    })
    const municipios = [
        {name:'Monterrey', id: 0},
        {name: 'San Nicolás', id: 1},
        {name: 'Guadalupe', id: 2},
        {name: 'San Pedro', id: 3},
        {name: 'Santa Catarina', id: 4},
        {name: 'Escobedo', id: 5},
        {name: 'Apodaca', id: 6},
        {name: 'Santiago', id: 7}
    ];

    const tags = [
        "Sushi", "Hamburguesas", "Burgers", "Antojitos", "Comida Japonesa", "Comida Rapida", 
        "Pizza", "Ramen", "Tacos", "Tortas", "Hot Dogs", "Hotchos", "Chilaquiles", "Drinks", "Litros", 
        "Bebidas", "Carne Asada", "Grill", "Pollo Asado", "Parrilla", "Helados", "Nieve", "Postres", 
        "Boneless", "Alitas", "Churros", "Pan dulce", "Elotes", "Snack", "Fries", "Papas a la francesa", 
        "Brownies", "Cake", "Pasteles", "Donas", "Comida mexicana", "Pays", "BBQ", "Cerveza", "Cheve", "Desayunos", 
        "Buffet", "Hotcakes", "Café", "Frappe", "Malteadas", "Waffles", "Queso", "Mariscos", "Seafood", "Noodles", 
        "Cookies", "Galletas", "Ensaladas", "Healthy", "Fit", "Food truck", "Panadería", "Bakery", "Pasteles", 
        "Comida China", "Chocolate", "Pollo Asado", "Sushi", ""
        ];

    const addTag = (value) =>{
        if ( value.length > 0 ){
           setPlaceData((prevState)=>({
            ...prevState,
            [tags]: placeData.tags.push(value)
        }));  
        }
    }

    const clearForm = () => {
        setPlaceData({
        name:'',
        location:'',
        ig:'',
        fb:'',
        tags:[]
        })
    }
    const submitData = () => {
         db.collection('places').add(placeData); 
         clearForm();
    
    }
    const handleChange = ({target:{name, value}}) => {
        setPlaceData((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
   const  deleteTag = (tag) => {
        const list = placeData.tags;
        list.splice(list.indexOf(tag), list.indexOf(tag)+1);
        setPlaceData((prevState)=>({
            ...prevState,
            [tags]: list
        }));  
   }
    return (
        <div className='place-form'>
            <div className="columns">
                <div className="column is-two-fifths">
                    <form action="submit">
                    <div className="control field">
                        <input name='name' value={placeData.name} onChange={handleChange} className="input" type="text" placeholder="Nombre"/>
                    </div>
                    <div className="select field">
                        <select name='location' onChange={handleChange} value={placeData.location}>
                            <option>Municipio</option>
                            {
                                municipios.map((item) => {
                                    return(
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="control field">
                        <input name='ig' value={placeData.ig} onChange={handleChange} className="input" type="text" placeholder="URL Instagram"/>
                    </div>
                    <div className="control field">
                        <input name='fb' value={placeData.fb} onChange={handleChange} className="input" type="text" placeholder="URL Facebook"/>
                    </div>
                    <Autocomplete
                    className='field'
                        name="tags"
                        label="tags"
                        placeholder="Agrega etiquetas a tu restaurant"
                        data={tags}
                        add={(e)=>{addTag(e)}}
                    />
                    {
                        placeData.tags.length > 0 ?
                        <div className='tag-group'>
                        {
                            placeData.tags.map((item)=>(
                            <span class="tag is-info">{item} <FiX onClick={()=>{deleteTag(item)}}></FiX> </span>
                            ))
                        }
                    </div> : null
                    }
                    <div className="submit-button">
                    <button class="button is-danger" onClick={(e)=>{ e.preventDefault(); submitData()}}>Agregar</button>
                    </div>
                  
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default PlaceForm;