import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calculation: "",
  tempStoreCalculation: "",
  tempStoreSign: "",
};

const numberSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      if (action.payload === ".") {
        if (state.calculation.includes(".")) return;
      }
      state.calculation = state.calculation + action.payload;
    },
    cleanNumbers: (state) => {
      state.calculation = "";
      state.tempStoreCalculation = "";
      state.tempStoreSign = "";
    },
    toggleMinusSign: (state) => {
      if (state.calculation[0] !== "-") {
        state.calculation = "-" + state.calculation;
      } else {
        state.calculation = state.calculation.slice(1);
      }
    },
    togglePersentageSign: (state) => {
      state.calculation = (
        parseFloat(state.calculation) *
        (1 / 100)
      ).toString();
    },
    pressBasicSign: (state, action) => {
      switch (action.payload) {
        case "/":
          state.tempStoreCalculation = +state.calculation;
          state.calculation = "";
          state.tempStoreSign = "/";
          break;
        case "x":
          state.tempStoreCalculation = +state.calculation;
          state.calculation = "";
          state.tempStoreSign = "*";
          break;
        case "+":
          state.tempStoreCalculation = +state.calculation;
          state.calculation = "";
          state.tempStoreSign = "+";
          break;
        case "-":
          state.tempStoreCalculation = +state.calculation;
          state.calculation = "";
          state.tempStoreSign = "-";
          break;
      }
    },
    pressEqualSign: (state) => {
      if (state.tempStoreSign === "/") {
        state.calculation =
          parseFloat(state.tempStoreCalculation) /
          parseFloat(state.calculation);
      } else if (state.tempStoreSign === "*") {
        state.calculation =
          parseFloat(state.tempStoreCalculation) *
          parseFloat(state.calculation);
      } else if (state.tempStoreSign === "+") {
        state.calculation =
          parseFloat(state.tempStoreCalculation) +
          parseFloat(state.calculation);
      } else if (state.tempStoreSign === "-") {
        state.calculation =
          parseFloat(state.tempStoreCalculation) -
          parseFloat(state.calculation);
      }
      state.tempStoreCalculation = "";
      state.tempStoreSign = "";
    },
  },
});

export const {
  addNumber,
  cleanNumbers,
  toggleMinusSign,
  togglePersentageSign,
  pressBasicSign,
  pressEqualSign,
} = numberSlice.actions;

export const calculationSelector = (state) => state.calculation.calculation;

export default numberSlice.reducer;
