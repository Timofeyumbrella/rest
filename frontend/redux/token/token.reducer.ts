import { TokenActionTypes } from "./token.types";

const INITIAL_STATE = {
  token: "",
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TokenActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default tokenReducer;
