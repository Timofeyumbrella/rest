import { ModalActionTypes } from "./modal.types";

export const setIsModalOpened = (bool) => ({
  type: ModalActionTypes.SET_IS_MODAL_OPENED,
  payload: bool,
});
