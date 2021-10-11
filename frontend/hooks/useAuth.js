import { useSelector, useDispatch } from "react-redux";

import atob from "atob";

import { setToken } from "redux/token/token.actions";
import getAxiosInstance from "utils/instance";

function useAuth() {
  const dispatch = useDispatch();
  const instance = getAxiosInstance();

  const { token } = useSelector((state) => state.token);

  const getProfile = () => JSON.parse(atob(token.split(".")[1])).user;

  const updateUser = async ({
    id,
    name,
    email,
    age,
    gender,
    password,
    roleId,
  }) => {
    const { data: res } = await instance.put(`/users/${id}`, {
      name,
      email,
      age,
      gender,
      password,
      roleId,
    });

    dispatch(setToken(res.data.access));
  };

  return {
    getProfile,
    updateUser,
  };
}

export default useAuth;
