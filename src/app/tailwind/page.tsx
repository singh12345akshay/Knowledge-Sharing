"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const condition = false;
  return (
    <>
      <div
        className={`p-6 mx-auto rounded-xl shadow-lg items-center space-x-4`}
      >
        <Image
          alt=""
          width={150}
          height={150}
          className="float-left"
          src="https://www.pixelstalk.net/wp-content/uploads/images8/Merry-Christmas-2023-Wallpaper-HD.jpg"
        />
        <Image
          alt=""
          width={200}
          height={200}
          className="float-right"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
        />
        <p className="clear-end
        ">
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
        <p className="float-right">This is hdrfgh af giskfgskghsh 2 dkffgsrf</p>

        {/* <div className='prose lg:prose-xl prose-headings:underline hover:prose-h2:prose-css-color'>
          <div>ChitChat</div>
          <h2 >You have a new message!</h2>
        </div> */}
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
};

export default page;
