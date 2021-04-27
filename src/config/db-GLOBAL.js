//Importando Express
const express = require("express");
const app = express();

//Import MongoClient
const { MongoClient } = require("mongodb");

//Connection URI
const uri = "mongodb+srv://admin:LirsxKujRwzLgKLn@cluster0.wdcmz.mongodb.net/pi6?retryWrites=true&w=majority";

//Options for connection
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

class Database {
    static connect() {
        MongoClient.connect(uri, options)
            .then((client) => {
                global.conn = client;
                console.log(`Conectado ao banco de Dados: ${client.db().databaseName}`);
            })
            .catch((error) => console.log(error));
    }
}

module.exports = { Database };
