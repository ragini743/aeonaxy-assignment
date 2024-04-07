import React from "react";

const OnYourWayMessage = () => {
  return (
    <div className="w-[80%] lg:w-[60%] mx-auto md:flex items-center justify-between my-24">
      <div className="md:w-[35%] ">
        <img src="./congrats-icon.png" alt=""></img>
      </div>
      <div className="md:w-[50%] mt-4 md:mt-0">
        <h1 className="font-bold text-3xl  lg:text-4xl ">
          You are on your way !
        </h1>
        <div
          className="
         text-xl md:text-2xl lg:text-4xl mt-4 md:mt-8"
        >
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>

        <div className="italic text-gray-600  font-semibold my-4">
          <p className="">
            "through it's engaging and well -structured courses ,Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand .I now feel confident approaching both technical job
            interviews and real world problem solving situations. "
          </p>
          <p className=" mt-8">-Jacob s.</p>
        </div>
      </div>
    </div>
  );
};

export default OnYourWayMessage;
