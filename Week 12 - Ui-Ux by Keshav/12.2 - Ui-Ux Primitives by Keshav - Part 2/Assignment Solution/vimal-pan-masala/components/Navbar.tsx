import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 right-0 z-50 max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-extrabold text-orange-600 tracking-tighter">
          Vimal
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="#products"
          className="text-orange-950 font-medium tracking-tight hover:text-orange-900 transition-all duration-300"
        >
          Products
        </Link>
        <button className="bg-orange-600 text-white font-medium px-4 py-2 hover:bg-orange-700 transition-all duration-300 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
