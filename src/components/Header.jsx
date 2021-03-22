import React from 'react';
import './Header.css'
import headerImg from './images/header-img.png'

function Header (){
    return (
        <div className='header-container'>
            <img className='main-image' src={headerImg} alt='cafe'></img>
            <h1 className='store-name'>Bar natural</h1>
            
        </div>
        
    )
}

export default Header