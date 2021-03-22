import React,{useState} from'react'; 
import './Products.css'
import './ProductGallery.css'

import Product from './Product'
import allProducts from './AllProducts';
import AllFilters from './Filter/AllFilters'




function ProductGallery ({filter}){

    
    const shownProducts = allProducts.filter((product) => product.type ===filter)
    return (
        <div>

        
            <div className='product-gallery' >
                
                {allProducts.map( (product)=> { 

                    if (product.type===filter){ 
                        return (<Product src={product.src} name={product.name} price={product.price}/>)
                    } 
                    // Si el filtro está definido para mostrar todos los elementos, no selecciona ninguno en particular 
                    else if (filter==='all-products'){
                        return ( <Product src={product.src} name={product.name} price={product.price}/>)
                    }
                    
                })
                }
            </div> 
        </div>
        

    )
}

export default ProductGallery