import React from "react";
import { useSelector } from "react-redux";
import { calculationSelector } from "../features/numberSlice";

const DisplayCalculationSection = () => {
  const calculation = useSelector(calculationSelector);
  return (
    <div
      className="flex justify-end items-end p-4 basis-1/3"
      aria-label="display-numbers"
    >
      <div className="text-white text-3xl">
        {calculation}
      </div>
    </div>
  );
};

export default DisplayCalculationSection;
