import './App.css';
import Products from './components/Products'
import ProductDetails from './components/ProductDetails';
import React, {useState, Fragment } from 'react';

function App() {

  const [productsList, setProductsList] = useState([]);

  const addProductHandler = (name, price) => {
    setProductsList((prevUsersList) => {
      return [...prevUsersList, {name: name, price: price},
      ];
    });
  }
  

  return (
  <Fragment>
     <Products onAddProduct={addProductHandler}/>
     <ProductDetails  products={productsList} />
  </Fragment>
  );
}

export default App;
