export const addUser = (name = "مهمان", age = "نامشخص") => {
  const user = { name, age };
  return user;
};

export const renderusers = () => {
  const userlist = document.getElementById("userList");
  userlist.innerHTML = users.map(
    (user) => `<li>${user.name} , ${user.age}</li>`
  );
};
