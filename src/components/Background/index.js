import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-white transition-all dark:bg-myblack-dark">
      {children}
    </div>
  );
};

export default Background;
