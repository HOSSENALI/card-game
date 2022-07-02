import { Dispatch } from "redux";
import axios from "axios";
import { AddToCardDetailsAction, Card } from "../../types";
import { ADD_TO_CARD_DETAILS, GET_CARDS } from "./ActionTypes";

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

export function addTocart(card: Card): AddToCardDetailsAction {
  return {
    type: ADD_TO_CARD_DETAILS,
    payload: {
      card,
    },
  };
}

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
