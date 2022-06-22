import { Button, IconButton, Icon } from "@material-tailwind/react";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-4 shadow-md bg-white">
      <IconButton size="md" className="h-20 w-20 border-0">
        <i className="fas fa-bars" />
      </IconButton>
      <IconButton size="md" className="ml-6 h-20 w-20 border-0">
        <i className="fas fa-file" />
      </IconButton>
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
      <div className=" mx-5 md:mx-20 flex flex-grow items-center rounded-lg focus-within:text-gray-600 focus-within:shadow-md px-5 py-2 bg-gray-100 text-gray-600">
        <IconButton>
          <i className="fas fa-search" />
        </IconButton>
        <input
          type="text"
          placeholder="search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <IconButton color="grey" className="hidden md:inline-flex ml-5 md:ml-20">
        <i className="fas fa-th" />
      </IconButton>
      <img
        loading="lazy"
        className="hidden cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt=""
      />
    </header>
  );
}

export default Header;
