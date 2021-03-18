import React,{useState} from'react'; 
import './Products.css'

function Products ({name, src,price,type}){
   
    // Creo un array que va a contener a todos los productos, cada producto será un objeto que contenga las propiedades 'name' 'src' y 'price'
   const allProducts= [
       { 
           name:'jugo de naranja',
            src :`https://images.unsplash.com/photo-1613478223719-2ab802602423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80`,
            price:'150'
        },
        {
            name:'Porción de Budín de Limón',
            src :`https://images.unsplash.com/photo-1605466237924-1543b3abe5d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGxlbW9uJTIwcGllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
            price:'150'
        },
        {
              name: 'Porción de Lemon Pie',
            src:'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price:'300'
        },
        {
            name:'Porción de Cheesecake',
            src:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
            price:'300'
        },
        {
            name: 'Porción de torta de manzana',
            src:'https://images.unsplash.com/photo-1562007908-72e11e85b1cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' ,
            price: '300'
        },
        {
            name:'Té en hebras',
            src: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            price:'200'
        },
        {
            name:'Café con leche',
            src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
            price: '180',
            type:'hot-drink'
        }
        
          
    ]
    // Declaramos la variable filtro que tendrá los estados= 'all-products', 'hot-drinks','cold-drinks','piece-of-cake'
    //El estado de la variable cambiará al tocar el botón que muestra el tipo de producto que queremos ver en pantalla
    const [filter,setFilter]=useState('all-products');

    return (
        <div className='product-gallery' >
          
            {allProducts.map( (product)=> { 
                    if (product.type===filter){ return(
                     <div className= 'product-container '>
                        <div className='image-container'>
                            <img className='product-image'  src={product.src} alt={product.name}/>
                        </div>
                        <h2 className='product-name'> {product.name}</h2>
                        <span className='product-price'>$ {product.price} </span>
                    </div>)
                } 
                // Si el filtro está definido para mostrar todos los elementos, ni selecciona ninguno en particular 
                else if (filter==='all-products'){
                    return(
                    <div className= 'product-container '>
                    <div className='image-container'>
                        <img className='product-image'  src={product.src} alt={product.name}/>
                    </div>
                    <h2 className='product-name'> {product.name}</h2>
                    <span className='product-price'>$ {product.price} </span>
                </div>)
                }
                
            })
            }
        </div> 

    )
}

export default Products