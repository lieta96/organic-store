import React,{useState,useEffect} from 'react';
import './Filter.css';
import ProductGallery from '../ProductGallery';
import coldDrinksLogo from './images/cold-drinks-logo.svg';
import pieceOfCakeLogo from './images/piece-of-cake-logo.svg';
import hotDrinksLogo from './images/hot-drinks-logo.svg';
import allProductsLogo from './images/all-products-logo.svg';
import allProducts from '../AllProducts'

function Filter({src,typeProduct,nameTypeProduct}){

    const [filter, setFilter]=useState('all-products');

        // Cuando el filtro cambia queremos cambiar lo que se muestra en pantalla, para eso usamos el useEffect

    useEffect (() => {
        setFilter(filter)
    },[ filter ])

    
    return (
      <div>
          <div className='filters-container'>
          <div className='filter-container'>
                    <button className='filter-button'
                        onClick= {
                            ()=> {
                                setFilter('all-products')
                                const shownProducts = allProducts.filter((product) => product.type ===filter)
                                
                                return shownProducts
                            }
                        }>
                        <img src={allProductsLogo} alt='Todos los productos' className='filter-button-img'/>
                    </button>
                    
                    <span>Todos los productos</span>
                </div>
               <div className='filter-container'>
                    <button className='filter-button'
                        onClick= {
                            ()=> {
                                setFilter('hot-drink')
                                const shownProducts = allProducts.filter((product) => product.type ===filter)
                                
                                return shownProducts
                            }
                        }>
                        <img src={hotDrinksLogo} alt='Bebidas calientes' className='filter-button-img'/>
                    </button>
                    
                    <span>Bebidas calientes</span>
                </div>
                <div className='filter-container'>
                <button className='filter-button'
                    onClick= {
                        ()=> {
                            setFilter('cold-drink')
                            const shownProducts = allProducts.filter((product) => product.type ===filter)
                            
                            console.log (`tocaste el botón ${typeProduct} y el estado del filtro es ${filter}` )
                            console.log (`La lista de productos de este tipo son`)
                            console.log (shownProducts)
                            return shownProducts
                        }
                    }>
                    <img src={coldDrinksLogo} alt='Bebidas frías' className='filter-button-img'/>
                </button>
                
                <span>Bebidas frías</span>
          </div>
                <div className='filter-container'>
          
         
                    <button className='filter-button'
                        onClick= {
                            ()=> {
                                const shownProducts = allProducts.filter((product) => product.type ===filter)
                                setFilter('piece-of-cake')
                                console.log (`tocaste el botón ${typeProduct} y el estado del filtro es ${filter}` )
                                console.log (`La lista de productos de este tipo son`)
                                console.log (shownProducts)
                                return shownProducts
                            }
                        }>
                        <img src={pieceOfCakeLogo}  alt='Porciones de torta' className='filter-button-img'/>
                    </button>
                    
                    <span>Porciones de torta</span>
                 </div>
          </div>

          <h2 className='nuestros-productos'>Nuestros productos</h2>

          <ProductGallery filter={filter}/>
        
        </div> 
        
    )
}
export default Filter