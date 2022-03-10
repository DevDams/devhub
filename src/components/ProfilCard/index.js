import React, { useContext } from "react";
// components
import Loader from "../loader";
// images and icons
import PositionIcon from "../../assets/icons/pin.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedIcon from "../../assets/icons/link.svg";
import OfficeIcon from "../../assets/icons/office.svg";
import PositionIconWhite from "../../assets/icons/pin-white.svg";
import TwitterIconWhite from "../../assets/icons/twitter-white.svg";
import LinkedIconWhite from "../../assets/icons/link-white.svg";
import OfficeIconWhite from "../../assets/icons/office-white.svg";
import DefaultPicture from "../../assets/images/default.png";

import { ThemeContext } from "../../context/ThemeContext";

const ProfilCard = ({ loader, user }) => {
  const { theme } = useContext(ThemeContext);
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("fr", options);
  };

  return (
    <div>
      <div className="relative mt-5 flex w-full flex-col items-center rounded-lg border-2 border-gray-200 bg-white py-6 px-6 shadow-lg shadow-sm dark:border-none dark:bg-myblack-medium dark:text-gray-900 sm:flex sm:flex-row sm:items-start lg:px-8">
        {/* Loader */}
        {loader ? (
          <div className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center rounded-lg bg-black/60">
            <Loader />
          </div>
        ) : null}
        {/* No user found */}
        {!user.login ? (
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-lg  bg-white dark:bg-myblack-medium">
            <p className="text-xl font-bold dark:text-myblack-gray">
              Aucun utilisateur trouvé
            </p>
          </div>
        ) : null}
        {/* Porfil Picture */}
        <div>
          <div className="h-24 w-24 rounded-full bg-myblack-light sm:h-20 sm:w-20 lg:h-24 lg:w-24">
            <img
              src={user.avatar_url ? user.avatar_url : DefaultPicture}
              alt="avatar"
              className="w-full rounded-full border-4 border-myblack-light shadow-lg dark:border-4 dark:border-myblack-dark dark:shadow-xl"
            />
          </div>
        </div>
        {/* Profil detail */}
        <div className="mt-8 w-full sm:ml-5 sm:mt-0">
          <div className="flex flex-col items-center justify-between sm:flex sm:flex-row sm:items-start">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold dark:text-myblack-gray lg:text-2xl">
                {user.name}
              </h3>
              <span className="pt-2 font-semibold text-violet-500">
                @{user.login}
              </span>
            </div>
            <div>
              <p className="lg:text-md mt-1 font-medium text-myblack-light dark:text-myblack-gray">
                Inscrit le {formatDate(user.created_at)}
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-3">
            {user.bio ? (
              <p className="text-center font-medium text-myblack-light dark:text-white sm:text-left">
                {user.bio}
              </p>
            ) : (
              <p className="text-center font-medium text-myblack-light dark:text-white sm:text-left">
                Aucune bio définit
              </p>
            )}
          </div>
          <div className="mt-8 flex justify-around rounded-lg bg-gray-200 px-3 py-1 dark:bg-myblack-dark">
            <div className="flex flex-col items-center font-medium text-myblack-dark">
              <p className="font-bold dark:text-myblack-gray">Repo</p>
              <p className="text-myblack-medium dark:text-myblack-gray">
                {user.public_repos}
              </p>
            </div>
            <div className="flex flex-col items-center font-medium text-myblack-dark">
              <p className="font-bold dark:text-myblack-gray">Followers</p>
              <p className="text-myblack-medium dark:text-myblack-gray">
                {user.followers}
              </p>
            </div>
            <div className="flex flex-col items-center font-medium text-myblack-dark">
              <p className="font-bold dark:text-myblack-gray">Following</p>
              <p className="text-myblack-medium dark:text-myblack-gray">
                {user.following}
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-around font-medium text-myblack-dark">
            <p className="flex items-center">
              <img
                src={theme === "light" ? PositionIcon : PositionIconWhite}
                alt="search-icon"
                className="mr-2 w-5"
              />
              {user.location ? (
                <span className="sm:text-md text-sm dark:text-myblack-gray">
                  {user.location}
                </span>
              ) : (
                <span className="sm:text-md text-sm dark:text-myblack-gray">
                  Indefini
                </span>
              )}
            </p>
            <p className="flex items-center">
              <img
                src={theme === "light" ? TwitterIcon : TwitterIconWhite}
                alt="search-icon"
                className="mr-2 w-5"
              />
              {user.twitter_username ? (
                <span className="sm:text-md text-sm dark:text-myblack-gray">
                  <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">@{user.twitter_username}</a>
                </span>
              ) : (
                <span className="sm:text-md text-sm dark:text-myblack-gray">
                  Indéfini
                </span>
              )}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-around font-medium text-myblack-dark">
            <p className="flex items-center">
              <img
                src={theme === "light" ? LinkedIcon : LinkedIconWhite}
                alt="search-icon"
                className="mr-2 w-5"
              />
              {user.blog ? (
                <span className="sm:text-md text-sm dark:text-myblack-gray">
                  <a href={user.blog} target="_blank" rel="noreferrer">Site web</a>
                </span>
              ) : (
                <span className="sm:text-md text-sm dark:text-myblack-gray">
                  Indéfini
                </span>
              )}
            </p>
            <p className="flex items-center">
              <img
                src={theme === "light" ? OfficeIcon : OfficeIconWhite}
                alt="search-icon"
                className="mr-2 w-5"
              />
              {user.company ? (<span className="sm:text-md text-sm dark:text-myblack-gray">
                {user.company}
              </span>) : (<span className="sm:text-md text-sm dark:text-myblack-gray">
                Indéfini
              </span>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilCard;
