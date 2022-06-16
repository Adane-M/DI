import Products from './components/Products';
import Product from './components/Product';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/:id' element={<Product/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
