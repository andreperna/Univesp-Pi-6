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

//db variable
let connection = null;
let db = null;

//Create class Database
class Database {
    static async connect() {
        try {
            connection = await MongoClient.connect(uri, options);
            db = connection.db();
            console.log(`Conectado ao banco de Dados: ${db.databaseName}`);
        } catch {
            (error) => console.log(error);
        }
    }

    static get connection() {
        return connection;
    }

    static get db() {
        return db;
    }
}

module.exports = { Database };
