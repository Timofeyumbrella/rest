import { TokenActionTypes } from "./token.types";

export const setToken = (token: string) => ({
  type: TokenActionTypes.SET_TOKEN,
  payload: token,
});
