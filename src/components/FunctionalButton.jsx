import React from "react";
import { useDispatch } from "react-redux";

const FunctionalButton = ({ children, func, bgColor }) => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(func(children))}
      className={
        bgColor === "yellow"
          ? "functionalbutton functionalbutton-yellow"
          : "functionalbutton"
      }
    >
      {children}
    </button>
  );
};

export default FunctionalButton;
