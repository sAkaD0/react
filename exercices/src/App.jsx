
import axios from 'axios'
import { useEffect, useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import Header from './Components/Layout/Header'
import Product from './Components/Product/Product'

import { createContext } from 'react'
import { useReducer } from 'react'

import { Routes, Route } from 'react-router-dom'
import Error from './Components/Error/Error'

import ProductOne from './Components/Product/ProductOne'

import './App.css'
export const CartContext = createContext();


function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return addCart(state, action.product);
    case 'remove':
      return state.filter((product) => product.id != action.product.id);
    default:
      return state;
  }
}

function addCart(state, product) {
  if (state.lenght == 0) {
    return [{ ...product }];
  }
  else {
    const productIndex = state.findIndex((p) => p.id == product.id);
    if (productIndex == -1) {
      return [...state, { ...product }];
    }
    else {
      const updatedProducts = [...state];
      updatedProducts[productIndex].quantity += product.quantity;
      return updatedProducts;
    }
  }
}

function removeCart(product) {
  dispatch({ type: 'remove', product });
}


function App() {
  const [product, setProduit] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);


  useEffect(() => {
    axios.get(
      'http://localhost:3000/api/product'


    ).then((products) => {
      setProduit(products.data.products);
    })
  }, [])

  return (
    <>

      <CartContext.Provider value={[cart, dispatch]}>
        <Header />
        <Routes>
          <Route path="/" element={<Product product={product} />} />
          <Route path="/product/:id" element={<ProductOne product={product} />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App
