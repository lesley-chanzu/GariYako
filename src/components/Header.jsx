import React, { useState, useEffect } from "react";
import { Car, CoinsIcon, Menu, SearchIcon, User } from "lucide-react";
import frontLights1 from "../assets/Lights/Front-lights1.png";
import frontLights2 from "../assets/Lights/Front-lights2.png";
import rearLights1 from "../assets/Lights/Rare-lights1.png";
import rearLights2 from "../assets/Lights/Rare-lights2.png";
import gariYakoLogo from "../assets/Company-logo/gariyako_logo.png"

const placeholders = [
  "Search by make",
  "Search by year",
  "Search by mileage",
  "Search by price",
  "Search by body type",
];

function Header() {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      idx = (idx + 1) % placeholders.length;
      setPlaceholder(placeholders[idx]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative bg-[#0f0f0f] md:h-79"> 
      {/* nav / logo / search etc. */}
      <div className="relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* LOGO  */}
          <div className="flex items-center gap-2">
            <img src={gariYakoLogo} alt="GariYako Logo" className="w-50 h-50" />
            {/* <span className="text-white font-bold text-lg">GariYako</span> */}
          </div>

          {/* DESKTOP NAVIGATION  */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-300 hover:text-[#FF6B35] transition-colors"
            >
              Buy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#FF6B35] transition-colors"
            >
              Sell
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#FF6B35] transition-colors"
            >
              Rent
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#FF6B35] transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#FF6B35] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* DESKTOP ACTIONS  */}
          <div className="hidden md:flex items-center gap-4">
            {/* search input with rotating placeholder */}
            <div className="relative">
              <input
                type="text"
                placeholder={placeholder}
                className="border border-gray-300 rounded-lg py-1 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white"
              />
              <SearchIcon className="w-5 h-5 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#002855] text-white rounded-lg hover:bg-[#002855]/50 hover:text-gray-500 transition-colors">
              <User className="w-5 h-5" />
              <span>Sign in</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/50 hover:text-black transition-colors">
              <CoinsIcon className="w-5 h-5" />
              <span>Sell your car</span>
            </div>
          </div>
          {/* MOBILE NAVIGATION  */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 opacity-100 bg-amber-50" />
          </button>
        </div>

        {/* MOBILE MENU  */}
        {isOpen && (
            <div className="md:hidden py-4 border-t">
                <nav className="flex flex-col gap-4">
                    <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Buy</a>
                    <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Sell</a>
                    <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Rent</a>
                    <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Services</a>
                    <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</a>  
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#002855] text-white rounded-lg hover:bg-[#002855]/50 hover:text-black transition-colors">
                        <User className="w-5 h-5" />
                        <span>Sign in</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/50 hover:text-black transition-colors">
                        <CoinsIcon className="w-5 h-5" />
                        <span>Sell your car</span>
                    </button>
                </nav>
            </div>
        )}
      </div>

      {/* image background – no “hidden” class, grid stays visible */}
      <div className="absolute inset-0 hidden md:grid grid-cols-4 z-0">
        <img
          src={frontLights1}
          alt="Front Lights 1"
          className="w-full h-full object-cover"
        />
        <img
          src={frontLights2}
          alt="Front Lights 2"
          className="w-full h-full object-cover"
        />
        <img
          src={rearLights1}
          alt="Rear Lights 1"
          className="w-full h-full object-cover"
        />
        <img
          src={rearLights2}
          alt="Rear Lights 2"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
