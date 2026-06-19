import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300 font-sans antialiased selection:bg-orange-500/30 selection:text-orange-100 overflow-hidden flex flex-col px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
      {/* Subtle ambient glow for premium modern feel */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-orange-500/5 via-orange-500/[0.02] to-transparent pointer-events-none -z-10"></div>

      {/* Main content wrapper to constrain width on ultra-wide screens */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 lg:gap-12 flex-1">
        <Navbar />
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;
