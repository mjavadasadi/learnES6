export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  edit(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }

  delete(usersArray) {
    return usersArray.filter(user => user !== this);
  }
}

export const displayUser = ({ name, age }) => `Name: ${name}, Age: ${age}`;

export const renderUsers = (users) => users.map(displayUser).join('<br>');

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'javad', age: 30 },{ name: 'ahmadReza', age: 14 },{ name: 'roham', age: 15 }]);
    }, 2000);
  });
};
