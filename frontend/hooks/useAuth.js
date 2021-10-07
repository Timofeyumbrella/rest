const { useSelector } = require("react-redux");

import axios from "axios";

function useAuth() {
  const { token } = useSelector((state) => state.token);

  const instance = axios.create({ baseURL: "http://localhost:5000" });

  instance.interceptors.request.use((req) => {
    req.headers.authorization = `Bearer ${token}`;

    return req;
  });

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

  const login = async ({ email, password }) => {
    const { data: res } = await instance.post("/user/login", {
      email,
      password,
    });

    return res.data.access;
  };

  const createEvent = async ({ title, description, price, date }) =>
    instance.post("/events", {
      title,
      description,
      price,
      date,
    });

  const getEvents = async () => {
    const { data: res } = await instance.get("/events");

    return res.data;
  };

  const getEvent = async (id) => {
    const { data: res } = await instance.get(`/events/${id}`);

    return res.data;
  };

  const updateEvent = async ({ id, title, description, price, date }) =>
    instance.put(`/events/${id}`, {
      title,
      description,
      price,
      date,
    });

  const deleteEvent = async (id) => instance.delete(`/events/${id}`);

  return {
    register,
    login,
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent,
  };
}

export default useAuth;
