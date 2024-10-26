import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Details from './Components/Details';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Context from './utils/Context';
import Create from './Components/Create';
import Edit from './Components/Edit';

const App = () => {
  const { search, pathname } = useLocation();


  return (
    <div className="h-screen w-screen flex">

      {(pathname != "/" || search.length > 0) && (<Link to="/" className="absolute left-[17%] top-[3%] text-blue-500">
        Home
      </Link>)}
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Context>



    </div>
  )
}

export default App

