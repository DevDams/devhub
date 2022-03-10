import React from "react";

// Components
import AppCard from "./components/AppCard";

const App = () => {
  return (
    <div className="w-full flex justify-center pt-24 pb-32">
      <div className="w-full">
        {/* <h1 className="text-4xl text-center font-bold text-violet-500">
          A la recherche d'un <br/> profil Github
        </h1> */}
        <AppCard />
      </div>
    </div>
  );
};

export default App;
