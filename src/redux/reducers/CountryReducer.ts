import { Country, CountryActions } from "../../types";

import {
  ADD_TO_CART,
  GET_COUNTRIES,
  SET_FILTERED_DATA,
  Submit_Handling_Action,
} from "../action/ActionTypes";

type InitialState = {
  countries: Country[];
  cart: Country;
  filteredData: Country[];
  keyword: string;
  isVisible:boolean;
};
const initialState: InitialState = {
  countries: [],
  cart: {
    id: 0,
    Real_Name: "",
    Player_Name: "",
    Asset: "",
  },
  filteredData: [],
  keyword: "",
  isVisible:false
};
export default function CountryReducer(
  state = initialState,
  action: CountryActions
): InitialState {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload.countries,
        filteredData: action.payload.countries,
      };
    }

    case SET_FILTERED_DATA: {
      // console.log("Hossen-ali",filteredData)
      return {
        ...state,
        filteredData: action.payload.filtered,
      };
    }
    case ADD_TO_CART: {
      const { country } = action.payload;
      //  console.log("Hi",country);
      return {
        ...state,
        cart: country,
        isVisible: true,
      };
    }
    // case Submit_Handling_Action: {
    //   const { country } = action.payload;
    //   //  console.log("Hi",country);
    //   return {
    //     ...state,
    //     cart: [country],
    //   };
    // }

    default:
      return state;
  }
}
function filteredData(filteredData: any) {
  throw new Error("Function not implemented.");
}
