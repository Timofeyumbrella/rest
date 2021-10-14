import getAxiosInstance from "utils/instance";

interface Event {
  data: {
    id: number;
    title: string;
    description: string;
    price: string;
    date: Date;
  };
}

const find = async (id) => {
  const instance = getAxiosInstance();

  const { data: res } = await instance.get<Event>(`/events/${id}`);

  return res.data;
};

export default find;
