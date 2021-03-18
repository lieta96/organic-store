import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter/Filter';
// página de referencia http://wp.nootheme.com/organici/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='store-name'>Organic Store</h1>
        <img className='main-image' src='https://blush.design/api/download?shareUri=BOGdehX7-&w=800&h=800&fm=png' alt='cafe'></img>
        <h2 className='store-description'>Nuevo local totalmente natural</h2>
      </header>

      <Filter filter='Bebidas calientes' src='./components/Filter/images/hot-drinks.svg' type='hot-drink'/>

      <Filter filter='Bebidas frías' src='./components/Filter/images/cold-drinks.svg' type='cold-drink'/>

      <Filter filter='Porciones de torta' src='./components/Filter/images/piece-of-cake.svg' type='piece-of-cake'/>

       <div>
         <h2>Nuestros productos</h2>
         <Products/>
       </div>
       
    </div>
  );
}

export default App;
