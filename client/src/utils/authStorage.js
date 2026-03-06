export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const loginUser = (email, password) => {
  const users = getUsers();
  return users.find((u) => u.email === email && u.password === password);
};

export const createUser = (email, password) => {
  const users = getUsers();

  const exists = users.find((u) => u.email === email);
  if (exists) return "User already exists";

  users.push({ email, password });
  saveUsers(users);

  return "success";
};
