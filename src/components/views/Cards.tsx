import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/reducers/RootReducer";
import { Card } from "../../types";
import SingleCard from "./Card/index";
const Cards = () => {
  const { cards, cart } = useSelector((state: rootState) => state.CardReducer);

  return (
    <>
      {cards.map((card: Card) => (
        <SingleCard card={card} key={card.id} />
      ))}
    </>
  );
};

export default Cards;
