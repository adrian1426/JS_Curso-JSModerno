
export const deleteUser = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const deleteUser = await response.json();
  return deleteUser;
};