import { userToModel } from "../mappers/userGetMapper";

export const getUserById = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return userToModel(data);
};