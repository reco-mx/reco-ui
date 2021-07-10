import React, { useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard'
import { db } from '../../firebase'
import './CardList.scss'


const CardList = () => {
    const [places, setPlaces] = useState([]);

    const getData = () => {
        db.collection('places').onSnapshot((querySnapshot) => {
            const places = [];
            querySnapshot.forEach((item) => {
                console.log(item.data());
                places.push({...item.data(), id:item.id})
            })

            setPlaces(places)
            console.log(places);
        });
    }

    useEffect(
        ()=> {
            getData();
        }, []
    )

    return(
        <div className='card-list'>
            <div className="columns  is-vcentered">
                {
                    places.map((item) =>{
                        return(
                            <div className="column is-3">
                                <RestaurantCard name={item.name} location={item.location} tags={item.tags}/>
                            </div>
                             
                        )       
                    }
                      
                    )
                }
            </div>
        </div>
    )
}

export default CardList;