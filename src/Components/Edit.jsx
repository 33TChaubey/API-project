import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // States to hold the product details for editing
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Fetch and set the initial product details
    const productToEdit = products.find((p) => p.id.toString() === id);  // Ensure id is treated as a string
    if (productToEdit) {
      setTitle(productToEdit.title || '');
      setImage(productToEdit.image || '');
      setCategory(productToEdit.category || '');
      setPrice(productToEdit.price || '');
      setDescription(productToEdit.description || '');
    } else {
      console.error('Product not found');
      navigate('/'); // Navigate back if product is not found
    }
  }, [id, products, navigate]);

  const handleProductUpdate = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 4 ||
      image.trim().length < 4 ||
      category.trim().length < 4 ||
      price.trim().length < 1 ||
      description.trim().length < 4
    ) {
      alert('Please fill all fields properly');
      return;
    }

    // Create an updated product object
    const updatedProduct = { id, title, image, category, price, description };
    
    // Update the products array with the new object, replacing the old one
    const updatedProducts = products.map((p) => (p.id.toString() === id ? updatedProduct : p));
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    navigate("/");
  };

  return (
    <form onSubmit={handleProductUpdate} className='p-[5%] w-screen h-screen flex flex-col items-center'>
      <h1 className="text-2xl mb-5">Edit Product</h1>
      <input
        required
        type="text"
        placeholder='Title'
        className='text-3xl bg-zinc-100 rounded w-1/2 p-2 mb-3'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        required
        type="url"
        placeholder='Image link'
        className='text-3xl bg-zinc-100 rounded w-1/2 p-2 mb-3'
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <div className='w-1/2 flex justify-between'>
        <input
          type="text"
          required
          placeholder='Category'
          className='text-3xl bg-zinc-100 rounded w-[45%] p-2 mb-3'
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          required
          placeholder='Price'
          className='text-3xl bg-zinc-100 rounded w-[45%] p-2 mb-3'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className='text-3xl bg-zinc-100 rounded w-1/2 p-2 mb-3'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows="10"
        required
        placeholder="Description"
      ></textarea>
      <div className='w-1/2'>
        <button type="submit" className='py-2 px-5 border font-semibold rounded border-blue-500'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Edit;
