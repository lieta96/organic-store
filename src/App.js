import logo from './logo.svg';
import './App.css';
import ProductGallery from './components/ProductGallery';
import Filter from './components/Filter/Filter';
// página de referencia http://wp.nootheme.com/organici/
import AllFilters from './components/Filter/AllFilters'
import Header from './components/Header'



function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      
      

      
      <AllFilters/>
      
      <div>
         {/* <ProductGallery/> */}
      </div>
      
    </div>
  );
}

export default App;
