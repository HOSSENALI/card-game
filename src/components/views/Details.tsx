import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/reducers/RootReducer";
import { Country } from "../../types";

const Cart = () => {
  const { cart } = useSelector((state: rootState) => state.CountryReducer);
  return (
    <>
      <div className="details">
        <h1 className="heading">Details</h1>
        <p>
          <b>Real Name:</b> {cart.Real_Name}
        </p>
        <p>
          <b>Player Name: </b>
          {cart.Player_Name}
        </p>
        <p>
          <b>Asset: </b>
          {cart.Asset}
        </p>
      </div>
    </>
  );
};

export default Cart;
