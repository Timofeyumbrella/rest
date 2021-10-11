import getAxiosInstance from "utils/instance";

const register = ({ name, age, email, gender, password }) => {
  const instance = getAxiosInstance();

  return instance.post("/user/register", {
    name,
    age,
    email,
    gender,
    password,
  });
};

export default register;
