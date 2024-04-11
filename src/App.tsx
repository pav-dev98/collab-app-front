import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app bg-white dark:bg-[#1c1c1c]">
      <Outlet />
      oli
    </div>
  );
}

export default App;
