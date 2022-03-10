import React from "react";
// css
import "./loader.css";

const Loader = () => {
  return (
    <div>
      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white dark:bg-myblack-light shadow-lg">
        <div className="spinner h-16 w-16 rounded-full border-4 border-t-violet-500"></div>
      </div>
    </div>
  );
};

export default Loader;
