import { userPostMapper } from "../mappers/userPostMapper";
import { UserModel } from "../models/userModel";

const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const newUser = await response.json();
  return newUser;
};

export const saveUser = async (data) => {
  if (!data.firstName || !data.lastName) return;

  const user = userPostMapper(new UserModel(data));

  const createUserResult = await createUser(user);
  return createUserResult;
};