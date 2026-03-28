import { Menu } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto px-4 md:px-8">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
            <Menu />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 text-zinc-700">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl md:text-2xl cursor-pointer">
          <img className="w-8 md:w-10" src="/logo.png" alt="Logo" />
          <span className="tracking-tight">Ai Hub</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 xl:gap-8 px-1 text-base font-medium text-zinc-600">
          <li className="hover:text-red-500 transition-colors"><a>Home</a></li>
          <li className="hover:text-red-500 transition-colors"><a>About</a></li>
          <li className="hover:text-red-500 transition-colors"><a>Services</a></li>
          <li className="hover:text-red-500 transition-colors"><a>Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-red-600 hover:bg-red-700 border-none rounded-full text-white px-6">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default NavBar;