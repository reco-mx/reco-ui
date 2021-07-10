import React from 'react';
import './RestaurantCard.scss'


const RestaurantCard = (props) =>{
   
    return(
        <div>   
            <div className="card">
                <div className="card-content">
                    <div className="title">
                        {props.name}
                    </div>
                    <div className="subtitle">
                        {
                            props.location.map((item)=> `${item}, `)
                        }
                    </div>
                    <div className="card-footer">
                        {
                            props.tags.map((tag)=> {
                                return(
                                    <span class="tag is-danger">{tag}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;