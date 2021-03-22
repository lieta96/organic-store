import React from 'react'

// Tenemos la tarjeta correspondiente a cada producto 

function Product ({src,name,price}){
    return (
        <div className= 'product-container '>
            <div className='image-container'>
                <img className='product-image'  src={src} alt={name}/>
            </div>
            <h2 className='product-name'> {name}</h2>
            <span className='product-price'>$ {price} </span>
        </div>
    )
}

export default Product