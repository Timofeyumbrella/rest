import { useState } from "react";
import { useDispatch } from "react-redux";
import useAuth from "hooks/useAuth";

import { setIsModalOpened } from "redux/modal/modal.actions";

import styles from "./Modal.module.scss";

function Modal({ id }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const auth = useAuth();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await auth.updateEvent({ id, title, description, price, date });

    setTitle("");
    setDescription("");
    setPrice("");
    setDate("");

    dispatch(setIsModalOpened(false));
    window.location.reload(false);
  };

  return (
    <div className={styles.modal}>
      <header>
        <h2 className={styles.modal__title}>update event</h2>
        <span
          className={styles.modal__close}
          onClick={() => dispatch(setIsModalOpened(false))}
        >
          &Chi;
        </span>
      </header>
      <form className={styles.modal__form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="event title"
          value={title}
          onChange={handleTitleChange}
          className={styles.modal__input}
          required
        />
        <input
          type="text"
          placeholder="event description"
          value={description}
          onChange={handleDescriptionChange}
          className={styles.modal__input}
          required
        />
        <input
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          placeholder="event price"
          value={price}
          onChange={handlePriceChange}
          className={styles.modal__input}
          required
        />
        <input
          type="date"
          name="trip-start"
          min="2018-01-01"
          max="2022-12-30"
          placeholder="event date"
          value={date}
          onChange={handleDateChange}
          className={styles.modal__input}
          required
        />
        <input
          type="submit"
          value="update event"
          className={styles.modal__submit}
        />
      </form>
    </div>
  );
}

export default Modal;
