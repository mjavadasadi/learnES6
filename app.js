let users=[]



const addUser = (name = "مهمان", age = "نامشخص") => {
  const user = { name, age };
  return user;
};

const updateUserList=(user)=>{
    users=[...users,user]
    renderusers()
}

// console.log(addUser("ahmadreza", "14"));

