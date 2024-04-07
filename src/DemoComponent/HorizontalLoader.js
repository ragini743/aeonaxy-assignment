import React from "react";

const HorizontalLoader = ({ loaderProgress }) => {
  console.log(loaderProgress);
  return (
    <div className="w-[80%] mx-auto h-1 bg-gray-200 my-12 relative">
      <div
        className="bg-green-700 absolute z-20 h-1  "
        style={{ width: `${loaderProgress}%` }}
      ></div>
    </div>
  );
};

export default HorizontalLoader;
