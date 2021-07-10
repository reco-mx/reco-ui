import React from 'react';
import './Header.scss'
import Banner from '../Banner/Banner'
const Header = () => {
    return (
        <div>
            <nav className='navbar' role ='navigation'>
               <div className="navbar-brand">
                   <div className="navbar-item" hre>
                       <h3 className='brand-title'>
                           Reco
                       </h3>
                   </div>
               </div>
               <div className="navbar-menu">
                   <a className='navbar-item' href="#"> Home </a>
               </div>
            </nav>
        </div>
    )
}

export default Header;