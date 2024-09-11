
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  edit(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
  delete(userArray) {
    return userArray.filter(user=> user!==this);
  }
}

export const addUser = (name = "مهمان", age = "نامشخص") => {
  const user = { name, age };
  return user;
};

export const displayUser = ({name, age}) =>  `اسم:${name} , سن : ${age}`;


export const renderusers = () => {
  const userlist = document.getElementById("userList");
  userlist.innerHTML = users.map(
    (user) => `<li>${user.name} , ${user.age}</li>`
  );
};

