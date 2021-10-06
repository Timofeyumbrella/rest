import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import styles from "./EventForm.module.scss";

function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const { token } = useSelector((state) => state.token);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    await axios.post(
      "http://localhost:5000/events",
      {
        title,
        description,
        price,
        date,
      },
      { headers }
    );

    setTitle("");
    setDescription("");
    setPrice("");
    setDate("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} disabled>
      <fieldset>
        <legend>Create your new event</legend>
        <input
          type="text"
          placeholder="event title"
          value={title}
          onChange={handleTitleChange}
          className={styles.form__input}
          required
        />
        <input
          type="text"
          placeholder="event description"
          value={description}
          onChange={handleDescriptionChange}
          className={styles.form__input}
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
          className={styles.form__input}
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
          className={styles.form__input}
          required
        />
        <input type="submit" value="create" className={styles.form__submit} />
      </fieldset>
    </form>
  );
}

export default EventForm;
