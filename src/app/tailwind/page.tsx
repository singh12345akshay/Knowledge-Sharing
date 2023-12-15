import React from 'react'

const page = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const condition = false;
  return (
    <>
      <div
        className={`p-6 max-w-sm mx-auto ${
          condition ? "bg-blue-300" : "bg-red"
        }  rounded-xl shadow-lg flex items-center space-x-4 hover:bg-green active:bg-grayLight mb-5`}
      >
        <div className='prose lg:prose-xl prose-headings:underline hover:prose-h2:prose-css-color'>
          <div>ChitChat</div>
          <h2 >You have a new message!</h2>
        </div>
      </div>
      {/* <ul className="grid grid-cols-1 gap-4 mb-4">
        {items.map((item, index) => (
          <li
            key={index}
            className={`p-4 border border-orange ${
              index === 0 ? "first:bg-yellow" : ""
            } 
              ${index === items.length - 1 ? "last:bg-green" : ""} `}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="group mb-5">
        <button className="bg-primary text-white px-4 py-2 rounded-md transition duration-300 transform group-hover:scale-105">
          Hover over me
        </button>
        <div className="group-hover:bg-green p-3">this will also hover</div>
      </div>
      <form className="flex max-w-sm items-center mx-auto space-x-6 bg-grayLight rounded-xl shadow-lg">
  <div className="shrink-0">
    <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file" className="block w-full text-sm text-grayDark
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-yellow file:text-violet-700
      hover:file:bg-orange
    "/>
  </label>
</form> */}
    </>
  );
}

export default page