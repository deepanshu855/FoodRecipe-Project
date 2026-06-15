import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
