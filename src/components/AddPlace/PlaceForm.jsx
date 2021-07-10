import React from 'react';
import './placeForm.scss';
import Autocomplete from '../shared/Autocomplete/Autocomplete'
const PlaceForm = () => {

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
        "Cookies", "Galletas", "Ensaladas", "Healthy", "Fit", "Food truck", "Panadería", "Bakery", 
        ];

    return (
        <div className='place-form'>
            <div className="columns">
                <div className="column is-two-fifths">
                    <form action="submit">
                    <div className="control field">
                        <input className="input" type="text" placeholder="Nombre"/>
                    </div>
                    <div className="select field">
                        <select>
                            <option>Municipio</option>
                            {
                                municipios.map((item) => {
                                    return(
                                        <option key={item.id}>{item.name}</option>
                                    )
                                    
                                })
                            }
                        </select>
                    </div>
                    <Autocomplete
                    className='field'
                        name="tags"
                        label="tags"
                        placeholder="Agrega etiquetas a tu restaurant"
                        data={tags}
                    />
                  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PlaceForm;