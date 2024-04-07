import React from "react";
import { arrayOfEquation } from "../utils/constant";
import MathEquation from "./MathEquation";

const MathComfortLevelPage = ({ selectedOption, handleSelectOption }) => {
  return (
    <div className=" mx-auto my-24">
      <div className="text-center">
        <h1 className="font-bold text-3xl  lg:text-4xl">
          What is your math comfort level ?
        </h1>
        <p className="text-gray-600 my-4">
          Choose the highest level you feel confident in - you can always adjust
          later .
        </p>
      </div>
      <div className="w-[80%] lg:w-[60%] mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {arrayOfEquation.map((equ, index) => (
          <React.Fragment key={index}>
            <MathEquation
              equ={equ}
              key={equ.id}
              handleSelectOption={handleSelectOption}
              isSelected={selectedOption && selectedOption.id === equ.id}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MathComfortLevelPage;
