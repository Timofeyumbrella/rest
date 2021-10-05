import { TokenActionTypes } from "./token.types";

export const setToken = (token) => ({
  type: TokenActionTypes.SET_TOKEN,
  payload: token,
});
