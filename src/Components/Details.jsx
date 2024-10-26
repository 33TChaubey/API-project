import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context';


const Details = () => {
  const [products, setProducts] = useContext(ProductContext);

  const [product, setproduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  // const getsingleproduct = async () => {



  //   try {  
  //     const { data } = await instance.get(`/products/${id}`)
  //     setproduct(data);

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id.toString() === id);  // Use `find` to get a single product, and compare as a string
      if (foundProduct) {
        setproduct(foundProduct);  // Set the found product to state
      } else {
        console.error('Product not found');
        navigate('/');  // Navigate back to home if the product is not found
      }
    }
  }, [id, products, navigate]); 

  const ProductDeleteHandler = async () => {
    try {
      const filteredProducts = products.filter((p) => p.id !== id)
      setProducts(filteredProducts)
      localStorage.setItem('products', JSON.stringify(filteredProducts))
      navigate('/');
    } catch (error) {
      console.log(error);         
    }
  }

  return (
    <div key={product?.id} className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
      <img className="object-contain h-[50%] w-[40%]" src={product?.image} alt="" />
      <div className="content w-[50%]">
        <h1 className='text-4xl'>{product?.title}</h1>
        <h2 className='text-red-500' >₹ {product?.price}</h2>
        <h3 className='text-zinc-400'>{product?.category}</h3>
        <p className='pb-5'>{product?.description}</p>
        <Link to={`/edit/${id}`} className="mr-5 py-3 px-5 border font-semibold rounded border-blue-500" >Edit</Link>
        <button onClick={()=> ProductDeleteHandler(product.id)} className="mr-5 py-3 px-5 border font-semibold rounded border-red-500" >Delete</button>

      </div>
    </div>
  )
}

export default Details;
