import React from "react";
import { ChefHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    // Removed fixed height, overflow-hidden, and justify-center.
    // Added a natural top margin (mt-8 lg:mt-16) to give it breathing room below the Navbar without forcing a scroll.
    <div className="w-full flex flex-col items-center px-4 mt-8 lg:mt-16">
      {/* Container carefully sized to stay centered without pushing bounds */}
      <div className="flex flex-col items-center text-center max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Minimalist Vercel-style pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-500 text-xs sm:text-sm font-medium mb-8 uppercase tracking-widest">
          <ChefHat className="w-4 h-4" />
          <span>Premium Collection</span>
        </div>

        {/* Sharp, high-contrast typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          Cook with <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Excellence.
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
          Your personal library of extraordinary recipes. Designed for culinary
          enthusiasts who appreciate elegance and simplicity.
        </p>

        {/* Minimal Buttons without any bloated UI */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link to="/recipes" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20">
            Browse Recipes
          </Link>

          <Link to="/create-recipe" className="w-full sm:w-auto px-8 py-3 bg-slate-900 border border-slate-800 text-white rounded-xl font-medium hover:bg-slate-800 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2 group">
            Start Cooking
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
