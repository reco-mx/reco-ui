import React, { useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard'
import { db } from '../../firebase'
import './CardList.scss'
import MainFilter from './MainFilter/MainFilter';


const CardList = () => {
    const [places, setPlaces] = useState([]);

    const getData = () => {
        db.collection('places').onSnapshot((querySnapshot) => {
            const places = [];
            querySnapshot.forEach((item) => {
                places.push({...item.data(), id:item.id})
            })

            setPlaces(places)
        });
    }

    useEffect(
        ()=> {
            getData();
        }, []
    )

    return(
        <div className='card-list'>
            <MainFilter/>
            <div className="columns is-gapless is-multiline ">
                {
                    places.map((item) =>{
                        return(
                            <div className="column is-one-quarter">
                                <RestaurantCard name={item.name} location={item.location} tags={item.tags} ig={item.ig} fb={item.fb}/>
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