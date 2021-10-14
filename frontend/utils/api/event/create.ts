import getAxiosInstance from "utils/instance";

const create = ({ title, description, price, date }) => {
  const instance = getAxiosInstance();

  return instance.post("/events", {
    title,
    description,
    price,
    date,
  });
};

export default create;
