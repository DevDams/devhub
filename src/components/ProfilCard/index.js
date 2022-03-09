import React from "react";

const ProfilCard = () => {
  return (
    <div>
      <div className="mt-5 shadow-lg flex w-full flex-col items-center rounded-lg border-2 border-gray-100 bg-white py-6 px-6 shadow-sm dark:border-none dark:bg-myblack-medium dark:text-gray-900 sm:flex sm:flex-row sm:items-start lg:px-8">
        {/* Porfil Picture */}
        <div>
          <div className="h-24 w-24 rounded-full bg-violet-500 sm:h-20 sm:w-20 lg:h-24 lg:w-24"></div>
        </div>
        {/* Profil detail */}
        <div className="sm:ml-5 mt-8 w-full sm:mt-0">
          <div className="flex flex-col items-center sm:flex sm:flex-row sm:items-start justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold lg:text-2xl dark:text-myblack-gray">Bob l'éponge</h3>
              <span className="pt-2 font-semibold text-violet-500">
                bobdev9_
              </span>
            </div>
            <div>
              <p className="lg:text-md mt-1 font-medium text-myblack-medium dark:text-myblack-gray">
                Inscrit le 25 janvier 2020
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-3">
            <p className="font-medium text-myblack-medium text-center sm:text-left dark:text-white">
              ActiveLock continuously authenticates users by the way they type
              to ensure only authorized users are accessing company equipment
            </p>
          </div>
          <div className="mt-8 flex justify-around rounded-lg bg-myblack-gray dark:bg-myblack-dark px-3 py-1">
            <div className="text-myblack-dark font-medium flex flex-col items-center">
              <p className="font-bold dark:text-myblack-gray">Repo</p>
              <p className="text-white">9</p>
            </div>
            <div className="text-myblack-dark font-medium flex flex-col items-center">
              <p className="font-bold dark:text-myblack-gray">Followers</p>
              <p className="text-white">3938</p>
            </div>
            <div className="text-myblack-dark font-medium flex flex-col items-center">
              <p className="font-bold dark:text-myblack-gray">Following</p>
              <p className="text-white">123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilCard;
