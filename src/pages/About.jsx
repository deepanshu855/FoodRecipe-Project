import React from "react";
import { ChefHat, Heart, Users } from "lucide-react";

const About = () => {
  return (
    // Removed fixed height, overflow-hidden, and justify-center.
    // It now naturally fits into the flex layout of App.jsx.
    <div className="w-full flex flex-col items-center px-4 animate-in fade-in duration-1000">
      {/* Header Section - Tightened spacing */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Elevating the Art of <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Home Cooking
          </span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          We believe that every meal is an opportunity to create something
          extraordinary. Our platform is designed for culinary enthusiasts who
          crave premium recipes and an elegant cooking experience.
        </p>
      </div>

      {/* Feature / Stat Cards - Reduced padding to fit viewport */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="group flex flex-col items-center text-center p-5 lg:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300">
            <ChefHat className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Expertly Curated
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Every recipe is meticulously tested and refined to ensure
            restaurant-quality results in your own kitchen.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col items-center text-center p-5 lg:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300">
            <Heart className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Crafted with Passion
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We celebrate the joy of cooking, sharing dishes that bring people
            together and turn ingredients into memories.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col items-center text-center p-5 lg:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300">
            <Users className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Global Community
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Join thousands of food lovers worldwide who share a dedication to
            quality, flavor, and culinary excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
