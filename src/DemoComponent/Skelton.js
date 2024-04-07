import React from "react";

const Skelton = () => {
  return (
    <div className="flex-col flex  justify-center items-center h-[100vh] ">
      <div className="h-24 w-24 rounded-full   border-orange-200 animate-spin border-8 border-t-orange-400 border-b-orange-400 border-l-orange-400"></div>
      <div className="font-bold text-gray-700 mt-8 text-xl lg:text-2xl">
        Finding learning path recommendations for you based on your responses
      </div>
    </div>
  );
};

export default Skelton;
