import getAxiosInstance from "utils/instance";

function useAuth() {
  const instance = getAxiosInstance();

  const login = async ({ email, password }) => {
    const { data: res } = await instance.post("/user/login", {
      email,
      password,
    });

    return res.data.access;
  };

  const register = ({ name, age, email, gender, password }) =>
    instance.post("/user/register", {
      name,
      age,
      email,
      gender,
      password,
    });

  return {
    login,
    register,
  };
}

export default useAuth;
