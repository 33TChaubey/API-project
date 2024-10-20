import React from 'react'


const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a className="py-3 px-5 border rounded border-blue-500" href="/create">Add New product</a>
        <hr className=" my-3 w-[80%]" />
        <h1 className="text-2xl w-[80%] mb-3">Category</h1>
        <ul className="w-[80%]">
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
            Cat 1
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-100"></span>
            Cat 2
          </li>
          <li className="mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-100"></span>
            Cat 3
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default App

