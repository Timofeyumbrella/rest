import getAxiosInstance from "utils/instance";

const find = async (id) => {
  const instance = getAxiosInstance();

  const { data: res } = await instance.get(`/events/${id}`);

  return res.data;
};

export default find;
