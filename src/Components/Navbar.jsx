import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [products] = useContext(ProductContext);


  let distinctCategorys = [...new Set(products.map((product) => product.category))];


  const color = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
  }


  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link className="py-3 px-5 border rounded border-blue-500" to="/create">Add New product</Link>
      <hr className=" my-3 w-[80%]" />
      <h1 className="text-2xl w-[80%] mb-3">Category</h1>
      <ul className="w-[80%]">
        {distinctCategorys.map((c, i) => (
          <Link to={`/?category=${c}`} key={i} className="mb-3 flex items-center">
            <span style={{ backgroundColor: color() }} className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            {c}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
