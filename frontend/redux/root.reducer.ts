import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tokenReducer from "./token/token.reducer";
import modalReducer from "./modal/modal.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["token"],
};

const rootReducer = combineReducers({
  token: tokenReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
