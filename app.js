import {addUser,renderusers} from './user'

const users = [];



const updateUserList = (user) => {
  users = [...users, user];
  renderusers();
};
const displayUser=(name ,age)=>{

  return `اسم:${name} , سن : ${age}`

}

// console.log(displayUser("ahmadreza", "14"));
// console.log(displayUser("javad", "34"));
