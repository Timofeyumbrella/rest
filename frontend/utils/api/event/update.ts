import getAxiosInstance from "utils/instance";

const update = ({ id, title, description, price, date }) => {
  const instance = getAxiosInstance();

  return instance.put(`/events/${id}`, {
    title,
    description,
    price,
    date,
  });
};

export default update;
