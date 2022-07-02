import {
  ADD_TO_CARD_DETAILS,
  GET_CARDS,
  Submit_Handling_Action,
} from "./redux/action/ActionTypes";

export type Card = {
  id: number;
  Real_Name: string;
  Player_Name: string;
  Asset: string;
};

export type MyCard = {
  cards: Card[];
};

//types of Actions for types.ts .....................
export type GetCards = {
  type: typeof GET_CARDS; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: {
    cards: Card[];
  };
};
export type AddToCardDetailsAction = {
  type: typeof ADD_TO_CARD_DETAILS;
  payload: {
    card: Card;
  };
};
export type submitHandlingAction = {
  type: typeof Submit_Handling_Action;
  payload: {
    card: Card;
  };
};

// to make type for action in reducer,we need to do union of every action's type from here.
export type CardActions =
  | AddToCardDetailsAction
  | GetCards
  | submitHandlingAction;
