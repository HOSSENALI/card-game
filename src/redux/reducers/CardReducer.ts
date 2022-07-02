import { Card, CardActions } from "../../types";

import { ADD_TO_CARD_DETAILS, GET_CARDS } from "../action/ActionTypes";

type InitialState = {
  cards: Card[];
  cart: Card;
  isVisible: boolean;
};
const initialState: InitialState = {
  cards: [],
  cart: {
    id: 0,
    Real_Name: "",
    Player_Name: "",
    Asset: "",
  },
  isVisible: false,
};
export default function CardReducer(
  state = initialState,
  action: CardActions
): InitialState {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: action.payload.cards,
      };
    }
    case ADD_TO_CARD_DETAILS: {
      const { card } = action.payload;
      return {
        ...state,
        cart: card,
        isVisible: true,
      };
    }
    default:
      return state;
  }
}
