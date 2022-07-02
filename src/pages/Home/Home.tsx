import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { rootState } from "../../redux/reducers/RootReducer";
import Details from "../../components/views/Details";
import Cards from "../../components/views/Cards";
import {
  fetchCards,
  handleAscendingSortAction,
  handleDescendingSortAction,
  submitHandlingAction,
} from "../../redux/action/CardActions";

function Home() {
  const { cart, isVisible, cards } = useSelector(
    (state: rootState) => state.CardReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards() as any);
  }, [dispatch]);
  const handleAscendingSort = () => {
    dispatch(handleAscendingSortAction(cards));
  };
  const handleDescendingSort = () => {
    dispatch(handleDescendingSortAction(cards));
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
