import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router(); // ! роутер опредляет какой метод запроса по маршрутизации (для взятия данных) будет испольоватся
// ! express фреймворк ноды, который упрощает написание кода сокращает синтаксис зaпросов
router.get("/users", getUsers); // роутер идет по этому маршруту и берет данные функции
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;
