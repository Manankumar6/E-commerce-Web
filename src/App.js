
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Error from './pages/Error';
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <>
  

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/singleproduct/:id' element={<SingleProduct/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
 
    </>
  );
}

export default App;
