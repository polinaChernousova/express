import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users); //! в респонс отправляем данные юзеров
};
export const createUser = (req, res) => {
  // console.log(req.body, "res");
  try {
    const { name, email, contact } = req.body;  //! в тело запроса закинули данные 
    // console.log(name, "user");
    users.push({ name, email, contact, id: uuid() });
    res.send("success user");
  } catch (error) {
    res.send("Error");
  }
};

export const getUser = (req, res) => {
  try {
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
  } catch (error) {
    res.send(error).json();
  }
};

export const deleteUser = (req, res) => {
  try {
    users = users.filter((user) => user.id !== req.params.id);
  } catch (error) {
    console.log("errrrrr");
  }
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;
  res.send("User Updated Successfully");
};
