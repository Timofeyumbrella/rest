import { store } from "redux/store";
import atob from "atob";

import User from "interfaces/User";

const find = (): User => {
  const state = store.getState();

  const { token } = state.token;

  return JSON.parse(atob(token.split(".")[1])).user;
};

export default find;
