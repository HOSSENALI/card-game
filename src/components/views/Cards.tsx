import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/reducers/RootReducer";
import { Country } from "../../types";
import Card from "./Card/index";
const CountryTable = () => {
  const { filteredData, cart } = useSelector(
    (state: rootState) => state.CountryReducer
  );

  return (
    <>
      {filteredData.map((country: Country) => (
        <Card country={country} />
      ))}
    </>
  );
};

export default CountryTable;
