import React, { useState, useEffect, createContext } from 'react';
import instance from '../utils/axios';



export const ProductContext = createContext();

const Context = (props) => {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products'))  || null); // Initialize with an empty array or null

  // const getProducts = async () => {
  //   try {
  //     const { data } = await instance.get('/products');
  //     console.log(data);
  //     setProducts(data);
  //     console.log(); // Set the fetched products into state
  //   } catch (error) {
  //     console.error('Error fetching products:', error); // Log error clearly
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);


  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
