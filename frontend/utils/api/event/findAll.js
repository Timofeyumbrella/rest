import getAxiosInstance from "utils/instance";

const findAll = async () => {
  const instance = getAxiosInstance();

  const { data: res } = await instance.get("/events");

  return res.data;
};

export default findAll;
