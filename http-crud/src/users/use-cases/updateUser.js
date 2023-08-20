import { userPostMapper } from "../mappers/userPostMapper";
import { UserModel } from "../models/userModel";

const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;

  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const newUser = await response.json();
  return newUser;
};

export const updateUser = async (data) => {
  if (!data.firstName || !data.lastName) return;

  const user = userPostMapper(new UserModel(data));

  const updateUserResult = await createUser({ ...user, id: data.id });
  return updateUserResult;
};