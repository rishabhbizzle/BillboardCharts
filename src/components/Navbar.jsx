import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-10 w-full mx-auto px-4 py-8 text-white bg-black">
        <Link to="/" className="bg-white hover:bg-slate-300 mx-auto justify-center px-2 py-1 text-xl md:text-2xl font-bold text-black text-center rounded ">Home
      </Link>
    </div>
  );
};

export default Navbar;
