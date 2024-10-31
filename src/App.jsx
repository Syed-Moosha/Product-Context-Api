import React from "react";
import Cards from "./Component/Cards";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Products from "./Component/Products";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 mt-4 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
       <div style={{marginTop:"40px"}}><Products /></div>
      </div>
    </div>
  );
};

export default App;
