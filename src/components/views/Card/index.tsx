import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cardDetails } from "../../../redux/action/CardActions";
import { rootState } from "../../../redux/reducers/RootReducer";
import { Card } from "../../../types";

const SingleCard = ({ card }: { card: Card }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: rootState) => state.CardReducer);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={() => dispatch(cardDetails(card))}
      className={card.id === cart.id ? "card selected" : "card"}
      key={card.id}
      data-testid="card"
    >
      <p>
        <b>Real Name</b>:&nbsp;{card.Real_Name}
      </p>
      <p>
        <b>Player Name</b>:&nbsp;{card.Player_Name}
      </p>
      <p>
        <b>Asset</b>:&nbsp;{card.Asset}
      </p>
    </motion.div>
  );
};

export default SingleCard;
