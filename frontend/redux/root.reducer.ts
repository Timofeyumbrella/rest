import { combineReducers } from "redux";

import tokenReducer from "./token/token.reducer";

const rootReducer = combineReducers({
  token: tokenReducer,
});

export default rootReducer;
