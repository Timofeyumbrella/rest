import getAxiosInstance from "utils/instance";

const destroy = (id) => {
  const instance = getAxiosInstance();

  return instance.delete(`/events/${id}`);
};

export default destroy;
