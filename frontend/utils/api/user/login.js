import getAxiosInstance from "utils/instance";

const login = async ({ email, password }) => {
  const instance = getAxiosInstance();

  const { data: res } = await instance.post("/user/login", {
    email,
    password,
  });

  return res.data.access;
};

export default login;
