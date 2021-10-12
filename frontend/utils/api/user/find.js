import { store } from "redux/store";
import atob from "atob";

const find = () => {
  const state = store.getState();

  const { token } = state.token;

  return JSON.parse(atob(token.split(".")[1])).user;
};

export default find;
