const { useSelector } = require("react-redux");

import axios from "axios";

function useAuth() {
  const { token } = useSelector((state) => state.token);

  const instance = axios.create({ baseURL: "http://localhost:5000" });

  instance.interceptors.request.use((req) => {
    req.headers.authorization = `Bearer ${token}`;

    return req;
  });

  const login = async ({ email, password }) => {
    const { data: res } = await instance.post("/user/login", {
      email,
      password,
    });

    return res.data.access;
  };

  const register = async ({ name, age, email, gender, password }) => {
    const { data: res } = await instance.post("/user/register", {
      name,
      age,
      email,
      gender,
      password,
    });

    return res.data;
  };

  const getEvents = async () => {
    const { data: res } = await instance.get("/events");

    return res.data;
  };

  const getEvent = async (id) => {
    const { data: res } = await instance.get(`/events/${id}`);

    return res.data;
  };

  const createEvent = async ({ title, description, price, date }) => {
    const { data: res } = await instance.post("/events", {
      title,
      description,
      price,
      date,
    });

    return res.data;
  };

  return {
    login,
    register,
    getEvents,
    getEvent,
    createEvent,
  };
}

export default useAuth;
