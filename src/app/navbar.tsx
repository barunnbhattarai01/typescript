"use client"
import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex w-full bg-black h-24 p-6">
  <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full gap-12 lg:gap-36 xl:gap-48">
    <div className="text-2xl text-white">FLAMEOFF</div>

    <div className="flex gap-8 lg:gap-24 xl:gap-20 px-3 py-2 text-[19px] text-white">
      <div>Home</div>
      <div className="
      
      
      
      
      
      
      
      
      
      
      ">About us</div>
      <div className="">Services</div>
      <div className="">Contact us</div>
    </div>

    <div className="flex text-white gap-6 px-1 py-2">
      <ShoppingCart />
      <Search />
    </div>
  </div>
</div>


      <div className="flex flex-col bg-black text-white w-full p-4 md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">FLAMEOFF</div>

          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 text-lg">
            <div>Home</div>
            <div>About us</div>
            <div>Services</div>
            <div>Contact us</div>
            <div className="flex gap-4 mt-2">
              <ShoppingCart />
              <Search />
            </div>
          </div>
        )}
      </div>







      <div className="bg-sky-500 h-[800px]">
        
      </div>



    </>
  );
}

export default Navbar;
