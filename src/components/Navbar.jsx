import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // Sticky container floats at the top of the app
    <div className="sticky top-4 z-50 flex items-center justify-center w-full mb-8 sm:mb-12 px-4 animate-in fade-in slide-in-from-top-4 duration-700">
      {/* Glassmorphism Pill Navigation */}
      <nav className="flex items-center gap-1 sm:gap-2 px-2 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full shadow-2xl shadow-black/50 overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-orange-500 bg-orange-500/10"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-orange-500 bg-orange-500/10"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`
          }
        >
          Recipes
        </NavLink>

        {/* Primary Action Button */}
        <NavLink
          to="/create-recipe"
          className={({ isActive }) =>
            `whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg ${
              isActive
                ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-orange-500/30"
                : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 hover:shadow-orange-500/25"
            }`
          }
        >
          Create Recipe
        </NavLink>

        <NavLink
          to="/favourite"
          className={({ isActive }) =>
            `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-orange-500 bg-orange-500/10"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`
          }
        >
          Favourite
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-orange-500 bg-orange-500/10"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
