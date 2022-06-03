const users = [];


export const addUser = ({ id, _id, name, userCode, userInput, userLang, courseID }) => {

  if(!_id || !name) return { error: 'Erreur !.' };

  const existingUser = users.find((user) => user._id === _id);
  if(existingUser) {
    const index = users.findIndex(object => {
      return object._id === _id;
    });
    users[index] = {...users[index], userCode, userInput, userLang, courseID}
    console.log(userCode, userLang);
    return { error: 'Username is taken.' }
  }
  else{
    const user = { id, _id, name, userCode, userInput, userLang, courseID  };
    users.push(user);
    return { user };
  }
}

export const removeUser = (id) => {
  const index = users.findIndex((user) => user._id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

export const getUser = (id) => users.find((user) => user.id === id);

export const getUsersInRoom = (courseID) => users.filter((user) => user.courseID === courseID);

export const getUsers = () => users;