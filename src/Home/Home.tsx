import React from "react";

import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { rootState } from "../redux/reducers/RootReducer";
import Details from "../components/views/Details";
import Cards from "../components/views/Cards";

import Search from "./Search";
import { Country } from "../types";
import {
  fetchCountries,
  handleAscendingSortAction,
  handleDescendingSortAction,
  submitHandlingAction,
} from "../redux/action/CountryActions";

function Home() {
  const { cart, isVisible } = useSelector(
    (state: rootState) => state.CountryReducer
  );
  const dispatch = useDispatch();
  // const [visible, setVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchCountries() as any);
  }, [dispatch]);
  const handleAscendingSort = () => {
    dispatch(handleAscendingSortAction() as any);
  };
  const handleDescendingSort = () => {
    dispatch(handleDescendingSortAction() as any);
  };
  const submitHandling = async () => {
    dispatch(submitHandlingAction(cart));
  };

  return (
    <div className="flex-container">
      <div className="flex-child1">
        <div className={isVisible ? "" : "hidden"}>
          <Details />
        </div>
        <div>
          {" "}
          <h1 className="heading">Overview</h1>
          <Cards />
        </div>
      </div>

      <div className="flex-child2">
        <h1 className="heading-control">Controls</h1>
        <div className="flex-control">
          <div className="control">
            <button onClick={handleAscendingSort}>SORT ASC</button>
          </div>
          <div className="control">
            <button onClick={handleDescendingSort}>SORT DESC</button>
          </div>
        </div>
        <div className="submitButton">
          <button onClick={submitHandling}> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
