import { User, renderUsers, fetchUsers } from './user.js';

let users = [];

const updateUserList = (user) => {
  users = [...users, user];
  renderUsersInHTML();
};

const renderUsersInHTML = () => {
  const userList = document.getElementById('userList');
  userList.innerHTML = users.map((user, index) => `
    <li>
      ${user.name}, ${user.age}
      <button class="edit" onclick="editUser(${index})">Edit</button>
      <button class="delete" onclick="deleteUser(${index})">Delete</button>
    </li>
  `).join('');
};

window.editUser = (index) => {
  const user = users[index];
  const newName = prompt("Enter new name:", user.name);
  const newAge = prompt("Enter new age:", user.age);
  user.edit(newName, newAge);
  renderUsersInHTML();
};

window.deleteUser = (index) => {
  users = users[index].delete(users);
  renderUsersInHTML();
};

document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const newUser = new User(name, age);
  updateUserList(newUser);
});

async function loadUsers() {
  const fetchedUsers = await fetchUsers();
  fetchedUsers.forEach(userData => {
    const user = new User(userData.name, userData.age);
    updateUserList(user);
  });
}

loadUsers();
