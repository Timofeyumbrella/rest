interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  gender: string;
  password: string;
  roleId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default User;
