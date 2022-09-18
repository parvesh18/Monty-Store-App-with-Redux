import React from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <div className="flex flex-row justify-between items-center bg-slate-900 text-white py-4 px-3 md:px-7 xl:px-10">
        {/* logo */}
        <Link to="/">
        <div className="flex flex-row justify-center items-center text-lg md:text-2xl xl:text-3xl font-logoFont font-bold cursor-pointer">
          <img src={Logo} className='h-8 md:h-12 pr-1 md:px-2' alt="" />
          Monty Store
        </div>
        </Link>
        {/* content */}
        <div className="flex flex-row items-center space-x-5 md:space-x-7 xl:space-x-10 text-base md:text-lg text-white font-poppin">
          <Link to="/">
            <h3 className="font-semibold cursor-pointer tracking-wider transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-105">
              Home
            </h3>
          </Link>
          <Link to="/cart">
            <div className="flex flex-row bg-white text-lg md:text-2xl xl:text-3xl p-2 rounded-full transition ease-in-out delay-100 duration-100 hover:bg-yellow-300 cursor-pointer">
              <GrCart />
              <span className="text-black text-sm md:text-base font-semibold -mt-2">
                10
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
