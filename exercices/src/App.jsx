
import axios from 'axios'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"

import Header from './Components/Layout/Header'
import Product from './Components/Product/Product'

import './App.css'

function App() {
  const [product, setProduit] = useState([]);
  useEffect(() => {
    axios.get(
      'http://localhost:3000/api/product'


    ).then((products) => {
      setProduit(products.data.products);
    })
  }, [])

  return (
    <>
      <Header></Header>
      <Product product={product}></Product>
    </>
  );
}

export default App
