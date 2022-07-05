import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../../../redux/reducers/RootReducer";

import { Card } from "../../../types";
import SingleCard from "../Card/index";
const Cards = () => {
  const { cards } = useSelector((state: rootState) => state.CardReducer);

  return (
    <motion.div layout>
      <AnimatePresence>
        {cards.map((card: Card) => (
          <SingleCard card={card} key={card.id} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cards;
