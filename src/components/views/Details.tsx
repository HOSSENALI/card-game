import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/reducers/RootReducer";

const Cart = () => {
  const { cart } = useSelector((state: rootState) => state.CardReducer);
  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="details"
      >
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
      </motion.div>
    </>
  );
};

export default Cart;
