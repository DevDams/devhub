import React from "react";

const Background = ({ children }) => {
  return (
    <body className="min-h-screen bg-white transition-all dark:bg-black/90">
      {children}
    </body>
  );
};

export default Background;
