import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [products, setProducts] = useContext(ProductContext);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  
  

  const addProductHandler = async (e) => {
    e.preventDefault();
    if (title.trim().length < 4 || image.trim().length < 4 || category.trim().length < 4 || price.trim().length < 1 || description.trim().length < 4) {
      alert('Please fill all the fields');
      return;
    }
    const product = { id:nanoid() ,title, image, category, price, description };
    setProducts([...products, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]))
    navigate("/")
    
  }


  return (
    <form onSubmit={addProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
      <h1 className="text-2xl mb-5">Add New Product</h1>
      <input required type="text"
        placeholder='Title'
        className='text-3xl bg-zinc-100 rounded w-1/2 p-2 mb-3'
        onChange={(e) => setTitle(e.target.value)}
        value={title} />
      <input required type="url"
        placeholder='imagelink'
        className='text-3xl bg-zinc-100 rounded w-1/2 p-2 mb-3'
        onChange={(e) => setImage(e.target.value)}
        value={image} />
      <div className='w-1/2 flex justify-between'>
        <input
          type="text"
          required
          placeholder='Category'
          className='text-3xl bg-zinc-100 rounded w-[45%] p-2 mb-3'
          onChange={(e) => setCategory(e.target.value)}
          value={category} />
        <input
          type="number"
          required
          placeholder='Price'
          className='text-3xl bg-zinc-100 rounded w-[45%] p-2 mb-3'
          onChange={(e) => setPrice(e.target.value)}
          value={price} />
      </div>
      <textarea className='text-3xl bg-zinc-100 rounded w-1/2 p-2 mb-3'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows="10"
        required
        placeholder="Description"
      ></textarea>
      <div className='w-1/2'>
        <button className='py-2 px-5 border font-semibold rounded border-blue-500'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Create
