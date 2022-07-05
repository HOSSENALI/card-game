import { Dispatch } from "redux";
import axios from "axios";

import { AddToCardDetailsAction, Card } from "../../types";
import { ADD_TO_CARD_DETAILS, GET_CARDS } from "./ActionTypes";

// fetching data from JSON file
export const fetchCards = () => (dispatch: Dispatch) => {
  axios.get("data.json").then((response) => {
    let data = response.data;

    dispatch({
      type: GET_CARDS,
      payload: {
        cards: data,
      },
    });
  });
};

// sorting card by ascending order
export const handleAscendingSortAction = (cards: Card[]) => {
  let sortedCards = cards.sort((a: Card, b: Card) =>
    a.Real_Name.localeCompare(b.Real_Name)
  );

  return {
    type: GET_CARDS,
    payload: {
      cards: sortedCards,
    },
  };
};

// sorting card by descending order
export const handleDescendingSortAction = (cards: Card[]) => {
  let sortedCards = cards
    .sort((a: Card, b: Card) => a.Real_Name.localeCompare(b.Real_Name))
    .reverse();

  return {
    type: GET_CARDS,
    payload: {
      cards: sortedCards,
    },
  };
};

//Adding single card details to show the details of card
export function cardDetails(card: Card): AddToCardDetailsAction {
  return {
    type: ADD_TO_CARD_DETAILS,
    payload: {
      card,
    },
  };
}

// saving data by hitting a fake API 
export const submitHandlingAction =
  (card: Card): any =>
  (dispatch: Dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(card))
      .then((response) => {
        console.log(response);
        alert("Successful");
      });
  };
