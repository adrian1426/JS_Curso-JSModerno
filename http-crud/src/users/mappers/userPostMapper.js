export const userPostMapper = (user) => {
  const {
    isActive,
    balance,
    avatar,
    firstName,
    lastName,
    gender
  } = user;

  return {
    isActive,
    balance,
    avatar,
    first_name: firstName,
    last_name: lastName,
    gender
  }
};