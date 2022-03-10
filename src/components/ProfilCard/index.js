import React, { useContext } from "react";
// images and icons
import PositionIcon from "../../assets/icons/compass.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedIcon from "../../assets/icons/linkedin.svg";
import PositionIconWhite from "../../assets/icons/compass-white.svg";
import TwitterIconWhite from "../../assets/icons/twitter-white.svg";
import LinkedIconWhite from "../../assets/icons/linkedin-white.svg";

import { ThemeContext } from "../../context/ThemeContext";

const ProfilCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className="mt-5 flex w-full flex-col items-center rounded-lg border-2 border-gray-200 bg-white py-6 px-6 shadow-lg shadow-sm dark:border-none dark:bg-myblack-medium dark:text-gray-900 sm:flex sm:flex-row sm:items-start lg:px-8">
        {/* Porfil Picture */}
        <div>
          <div className="h-24 w-24 rounded-full bg-violet-500 sm:h-20 sm:w-20 lg:h-24 lg:w-24"></div>
        </div>
        {/* Profil detail */}
        <div className="mt-8 w-full sm:ml-5 sm:mt-0">
          <div className="flex flex-col items-center justify-between sm:flex sm:flex-row sm:items-start">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold dark:text-myblack-gray lg:text-2xl">
                Bob l'éponge
              </h3>
              <span className="pt-2 font-semibold text-violet-500">
                bobdev9_
              </span>
            </div>
            <div>
              <p className="lg:text-md mt-1 font-medium text-myblack-light dark:text-myblack-gray">
                Inscrit le 25 janvier 2020
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-3">
            <p className="text-center font-medium text-myblack-light dark:text-white sm:text-left">
              ActiveLock continuously authenticates users by the way they type
              to ensure only authorized users are accessing company equipment
            </p>
          </div>
          <div className="mt-8 flex justify-around rounded-lg bg-gray-200 px-3 py-1 dark:bg-myblack-dark">
            <div className="flex flex-col items-center font-medium text-myblack-dark">
              <p className="font-bold dark:text-myblack-gray">Repo</p>
              <p className="text-myblack-medium dark:text-myblack-gray">9</p>
            </div>
            <div className="flex flex-col items-center font-medium text-myblack-dark">
              <p className="font-bold dark:text-myblack-gray">Followers</p>
              <p className="text-myblack-medium dark:text-myblack-gray">3938</p>
            </div>
            <div className="flex flex-col items-center font-medium text-myblack-dark">
              <p className="font-bold dark:text-myblack-gray">Following</p>
              <p className="text-myblack-medium dark:text-myblack-gray">123</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-around font-medium text-myblack-dark">
            <p className="flex items-center">
              <img src={ theme === 'light' ? PositionIcon : PositionIconWhite} alt="search-icon" className="mr-2 w-5" />
              <span className="dark:text-myblack-gray text-sm sm:text-md">San Francisco</span>
            </p>
            <p className="flex items-center">
              <img src={ theme === 'light' ?  TwitterIcon : TwitterIconWhite } alt="search-icon" className="mr-2 w-5" />
              <span className="dark:text-myblack-gray text-sm sm:text-md">Not available</span>
            </p>
          </div>
          <div className="flex items-center justify-around mt-2 font-medium text-myblack-dark">
            <p className="flex items-center">
            <img src={ theme === 'light' ?  LinkedIcon : LinkedIconWhite} alt="search-icon" className="mr-2 w-5" />
              <span className="dark:text-myblack-gray text-sm sm:text-md">San Francisco</span>
            </p>
            <p className="flex items-center">
              <span className="dark:text-myblack-gray text-sm sm:text-md">Not available</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilCard;
