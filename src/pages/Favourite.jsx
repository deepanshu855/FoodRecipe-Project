import React from "react";
import RecipeCard from "../components/RecipeCard";
import { Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Favourite = () => {
  // Logic preserved exactly
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  // Premium Empty State
  if (favourite.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[60vh] px-4 animate-in fade-in zoom-in-95 duration-500">
        {/* Large Premium Icon */}
        <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors duration-300"></div>
          <Heart className="w-10 h-10 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
        </div>

        {/* Friendly Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          No favourites yet
        </h1>
        <p className="text-slate-400 text-center max-w-md mb-8 leading-relaxed text-sm sm:text-base">
          You haven't saved any recipes to your collection. Start exploring and
          tap the heart icon on any recipe to save it for later.
        </p>

        {/* Attractive CTA Button (Visual route to home/explore) */}
        <Link
          to="/recipes"
          className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/25"
        >
          <Search className="w-4 h-4" />
          Explore Recipes
        </Link>
      </div>
    );
  }

  // Populated State
  return (
    <div className="w-full flex flex-col animate-in fade-in duration-700">
      {/* Page Header for context */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
          <Heart className="w-5 h-5 text-orange-500 fill-orange-500/20" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Your Favourites
        </h1>
      </div>

      {/* Grid perfectly matching your Homepage/Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full pb-10">
        {favourite.map((fav) => (
          <RecipeCard key={fav.id} recipe={fav} />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
