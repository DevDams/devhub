import React, { useContext } from "react"

// Images and icons
import Sun from '../../assets/icons/sun.svg'
import Moon from '../../assets/icons/moon.svg'

import { ThemeContext } from "../../context/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="durantion-500 rounded-full transition ease-in-out">
      {theme === "dark" ? (
        <span
          className="cursor-pointer text-lg dark:text-gray-600"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={Sun} alt="sun-icon" className="w-7" />
        </span>
      ) : (
        <span
          className="cursor-pointer text-lg dark:text-gray-600"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={Moon} alt="sun-icon" className="w-7" />
        </span>
      )}
    </div>
  );
};

export default Toggle;
