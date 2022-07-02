import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../../redux/action/CardActions";
import { rootState } from "../../../redux/reducers/RootReducer";
import { Card } from "../../../types";

const SingleCard = ({ card }: { card: Card }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: rootState) => state.CardReducer);

  return (
    <div
      onClick={() => dispatch(addTocart(card))}
      className={card.id === cart.id ? "card selected" : "card"}
      key={card.id}
    >
      <p>
        <b>Real Name</b>:&nbsp;{card.Real_Name}
      </p>
      <p>
        <b>Player Name</b>:&nbsp;{card.Player_Name}
      </p>
      <p>
        <b>Asset...</b>
      </p>
    </div>
  );
};

export default SingleCard;
