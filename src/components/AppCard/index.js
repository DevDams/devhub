import React, { useContext, useState } from "react";
// components
import Toggle from "../ThemeToggle/index";
import ProfilCard from "../ProfilCard/index";
// imges et icons
import SearchIcon from "../../assets/icons/search.svg";
import SearchIconWhite from "../../assets/icons/search-white.svg";

import { ThemeContext } from "../../context/ThemeContext";

const AppCard = () => {
  const { theme } = useContext(ThemeContext);

  const [Loader, setLoader] = useState(false);

  const fetchData = () => {
    setLoader(true)
  }

  return (
    <>
      <div className="mx-auto mt-10 w-10/12 rounded-xl md:w-3/5 lg:w-3/5 lg:max-w-2xl">
        {/* Header */}
        <div className="header flex h-16 w-full items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold dark:text-myblack-gray">
              DevThub
            </h1>
          </div>
          <Toggle />
        </div>
        {/* Search bar */}
        <div className="search-bar mt-2 flex h-12 w-full items-center justify-between rounded-xl bg-gray-200 shadow-sm sm:h-14">
          <div className="relative flex h-full w-full items-center dark:bg-myblack-dark">
            <img
              src={theme === "light" ? SearchIcon : SearchIconWhite}
              alt="search-icon"
              className="absolute ml-5 hidden w-7 sm:block"
            />
            <input
              type="text"
              className="h-full w-full rounded-xl border-2 border-gray-100 px-6 text-lg font-medium outline-none focus:border-gray-200 focus:shadow-sm dark:border-transparent dark:bg-myblack-medium dark:text-myblack-gray dark:focus:border-myblack-gray sm:pl-14"
            />
            <button className="text-md absolute right-1 flex h-10 w-14 cursor-pointer items-center justify-center rounded-xl bg-violet-500 font-semibold text-white sm:right-2 sm:w-1/5" onClick={fetchData}>
              <span className="hidden sm:block">Rechercher</span>
              <img
                src={SearchIconWhite}
                alt="search-icon"
                className="block w-5 sm:hidden sm:w-7"
              />
            </button>
          </div>
        </div>
        {/* Profil info */}
        <ProfilCard loader={Loader} />
      </div>
    </>
  );
};

export default AppCard;
