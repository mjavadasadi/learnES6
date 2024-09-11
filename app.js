import { User, renderusers } from "./user.js";


const users = [{name:"ahmadReza",age:14},{name:"roham",age:15}];
const updateUserList = (user) => {
  users = [...users, user];
  renderusers();
};




const editUser = ( newName, newAge) => {
  User.edit(newName, newAge);
  renderusers();
};
const deleteUser =(user)=>{
users=users.filter(u => u!==user);
renderusers();
};

// console.log(displayUser("ahmadrez", "14"));
// console.log(displayUser("javad", "34"));
