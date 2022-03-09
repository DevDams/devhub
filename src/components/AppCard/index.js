import React, { useContext } from "react";
// components
import Toggle from "../ThemeToggle/index";
// imges et icons
import SearchIcon from "../../assets/icons/search.svg";
import SearchIconWhite from "../../assets/icons/search-white.svg";

const AppCard = () => {
  return (
    <>
      <div className="mx-auto mt-10 w-10/12 rounded-xl md:w-3/5 lg:w-3/5 lg:max-w-2xl">
        {/* Header */}
        <div className="header flex h-16 w-full items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold dark:text-white">DevHub</h1>
          </div>
          <Toggle />
        </div>
        {/* Search bar */}
        <div className="search-bar mt-2 flex h-14 w-full items-center justify-between rounded-xl bg-gray-200 shadow-sm">
          <div className="relative flex h-full w-full items-center">
            <img
              src={SearchIcon}
              alt="search-icon"
              className="absolute ml-5 hidden w-7 sm:block"
            />
            <input
              type="text"
              className="h-full w-full rounded-xl border-2 border-gray-100 px-6 text-lg font-medium outline-none dark:bg-gray-50 sm:pl-14"
            />
            <button className="text-md absolute right-0 flex h-full w-1/5 cursor-pointer items-center justify-center rounded-xl bg-violet-500 font-semibold text-white">
              <span className="hidden sm:block">Rechercher</span>
              <img
                src={SearchIconWhite}
                alt="search-icon"
                className="block w-7 sm:hidden"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;