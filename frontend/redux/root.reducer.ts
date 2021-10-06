import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tokenReducer from "./token/token.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["token"],
};

const rootReducer = combineReducers({
  token: tokenReducer,
});

export default persistReducer(persistConfig, rootReducer);
