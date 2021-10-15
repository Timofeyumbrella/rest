import getAxiosInstance from "utils/instance";

import Event from "interfaces/Event";

const find = async (id) => {
  const instance = getAxiosInstance();

  const { data: res } = await instance.get<Event>(`/events/${id}`);

  return res.data;
};

export default find;
