import { UserModel } from "../models/userModel";

export const userToModel = (user) => {
  const { id, isActive, balance, avatar, first_name, last_name, gender } = user;

  return new UserModel({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender
  });
};