import React from "react";

const Background = ({ children }) => {
  return (
    <body className="min-h-screen bg-white transition-all dark:bg-myblack-dark">
      {children}
    </body>
  );
};

export default Background;
