import React from 'react';
import Filter from './Filter'
import './AllFilters.css'
// import coldDrinks from './images/cold-drinks.svg';
// import pieceOfCake from './images/piece-of-cake.svg';
// import hotDrinks from './images/hot-drinks.svg';

function AllFilters (){
    
    return (
        
        <div className='filters-container'>
            <Filter/>

            {/* <Filter nameTypeProduct='Bebidas calientes' src={hotDrinks} typeProduct='hot-drink'/> */}
{/* 
            <Filter nameTypeProduct='Bebidas frías' src={coldDrinks} typeProduct='cold-drink'/>

            <Filter nameTypeProduct='Porciones de torta' src={pieceOfCake} typeProduct='piece-of-cake'/> */}
        </div>
    )
}

export default AllFilters