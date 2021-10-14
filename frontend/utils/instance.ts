import axios from "axios";
import { store } from "redux/store";

function getAxiosInstance() {
  const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

  const state = store.getState();
  const { token } = state.token;

  instance.interceptors.request.use((req) => {
    req.headers.authorization = `Bearer ${token}`;

    return req;
  });

  return instance;
}

export default getAxiosInstance;
