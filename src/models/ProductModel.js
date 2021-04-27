//Import _id generator
const { getNextSequence } = require("../lib/getNextSequence");

//Import Database
const { Database } = require("../config/db");

//Define collection and nameId for use
const collection = "products";
const nameId = "productId";

module.exports = class ProductModel {
    static async getAll() {
        // const result = await global.conn.db().collection(collection).find().toArray();
        // return result;
        const db = await Database.db;
        const result = await db.collection(collection).find().toArray();
        return result;
    }

    static async getById(id) {
        const db = await Database.db;
        const result = (await db.collection(collection).find({ _id: id }).toArray())[0];
        return result;
    }

    static async create(object) {
        // await verifyConn();
        // const db = global.conn.db(database);
        const db = await Database.db;
        object._id = await getNextSequence(db, nameId);
        await db.collection(collection).insertOne(object);
        // console.log(object);
        return object;
    }

    static async updateById(id, object) {
        const db = await Database.db;
        const filter = { _id: id };
        const updateDoc = { $set: object };
        const options = { upsert: true }; //create a document if no documents match the filter
        const result = await db.collection(collection).updateOne(filter, updateDoc, options);
        // console.log(result);
        return result;
    }

    static async deleteById(id) {
        const db = await Database.db;
        const filter = { _id: id };
        const result = await db.collection(collection).deleteOne(filter);
        return result;
    }
};
