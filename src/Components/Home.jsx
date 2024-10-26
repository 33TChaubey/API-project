import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import instance from '../utils/axios';

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);



  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductcategory = async () => {
    try {
      const { data } = await instance.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined") setfilteredProducts(products);
    if (category != "undefined") {
      // getproductcategory();
      setfilteredProducts(products.filter(p=>p.category===category))
    }

  }, [category, products]);
  console.log(filteredProducts);

  return (
    <>
      <Navbar />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="mr-3 mb-3 card p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-105 transition-all duration-300 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <h1 className="hover:text-blue-200 transition-all duration-300">{product.title}</h1>
          </Link>
        ))
        }

      </div>
    </>
  );
};

export default Home;
