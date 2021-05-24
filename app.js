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

//---------- RENOMEAR/TIRAR
//---------- Rota INDEX
app.get("/", (req, res)=>{
    res.sendfile("./src/public/home.html")
})

//---------- Arquivos Estaticos
app.use(express.static("./src/public"));

//---------- Rotas API
app.use("/products", require("./src/routes/productsRoute"));

//---------- Rotas VIEWS
const ejs = require('ejs')
app.set('view engine', "ejs")
app.set("views", "./views")
app.use("/products-view", require("./src/routes/productsRouteView"));




module.exports = app;
