import React from 'react';
import './RestaurantCard.scss'


const RestaurantCard = (props) =>{

    console.log('props');
    console.log(props);
   
    return(
        <div>   
            <div className="card">
               <div className="card-content">
                   <p className="title">
                       {props.name}
                   </p>
                   <p className="subtitle">
                        {props.location}
                   </p>
                   
               </div>
               <footer className="card-footer">
               <p class="card-footer-item">
                    <span >
                        Ver en <a className='ig-link' href={props.ig}  target="_blank">Instagram</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Ver en <a className='fb-link' href={`${props.fb}`}  target="_blank">Facebook</a>
                    </span>
                </p>
               </footer>
            </div>
        </div>
    )
}

export default RestaurantCard;