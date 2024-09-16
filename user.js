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
      resolve([{ name: 'John', age: 30 }]);
    }, 2000);
  });
};
