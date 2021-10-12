import useAxiosInstance from "utils/instance";

const update = async ({ id, name, email, age, gender, password, roleId }) => {
  const instance = useAxiosInstance();

  const { data: res } = await instance.put(`/users/${id}`, {
    name,
    email,
    age,
    gender,
    password,
    roleId,
  });

  return res.data.access;
};

export default update;
