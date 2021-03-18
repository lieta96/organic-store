import React,{useState} from 'react';
import './Filter.css';
import Products from'../Products'
import AllProducts from '../AllProducts';

function Filter({src,filter,type}){
 
    return (
      
            <div className='filter-container'>
                <button className='filter-button'
                    onClick= {
                        ()=> {setFilter({type})

                    }
                    }>
                    <img src={src} alt={filter}/>
                </button>
                
                <span>{filter}</span>
        </div>
        
        
    )
}
export default Filter