import express from "express";
// const express = require("express");

import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express(); //! в переменную app закинули все методы express`a
const port = 3005; //! создали порт

app.use(bodyParser.json()); //! все данные с боди перевели в json формат
app.use(cors()); //! нужен для того чтобы  предоставить веб-страницам доступ к ресурсам другого домена (на 3000 отображались данные 3005 порта)

app.use("/", userRoutes); // ! использует все маршруты этого роутера
app.get("/", (req, res) => res.send("hello from Express"));
app.all("*", (req, res) => res.send("That route doesnt exist"));

app.listen(port, () =>
  //! указываем какой порт слушать
  console.log(`server is listening on port: http://localhost:${port}`)
);
