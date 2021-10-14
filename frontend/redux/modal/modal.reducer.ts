import { ModalActionTypes } from "./modal.types";

const INITIAL_STATE = {
  isModalOpened: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SET_IS_MODAL_OPENED:
      return {
        ...state,
        isModalOpened: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
