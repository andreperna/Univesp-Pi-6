//Importando Express
const express = require("express");
const app = express();

//Importando Banco de Dados
const { Database } = require("./src/config/db");

//Selecionando os MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //caso for preciso fazer um res.json
app.set("json spaces", 4);

//---------- Conectando ao Banco de Dados
Database.connect();

//---------- Arquivos Estaticos
app.use(express.static("./src/public"));

//---------- Rotas
// app.use("/products", require("./src/routes/productsRoute"));
app.use("/", require("./src/routes/index"));

module.exports = app;
