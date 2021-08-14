import React from 'react';
import './RestaurantCard.scss'


const RestaurantCard = (props) =>{
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
               <p className="card-footer-item">
                    <span >
                        Ver en <a className='ig-link' href={props.ig}  target="_blank">Instagram</a>
                    </span>
                </p>
                <p className="card-footer-item">
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