//Import _id generator
const { getNextSequence } = require("../lib/getNextSequence");

//Import Database
const { Database } = require("../config/db");

//Define collection and nameId for use
const collection = "users";
const nameId = "userId";

module.exports = class UserModel {
    static async getAll() {
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
        const db = await Database.db;
        object._id = await getNextSequence(db, nameId);
        await db.collection(collection).insertOne(object);
        return object;
    }

    static async updateById(id, object) {
        const db = await Database.db;
        const filter = { _id: id };
        const updateDoc = { $set: object };
        const options = { upsert: true }; //create a document if no documents match the filter
        const result = await db.collection(collection).updateOne(filter, updateDoc, options);
        return result;
    }

    static async deleteById(id) {
        const db = await Database.db;
        const filter = { _id: id };
        const result = await db.collection(collection).deleteOne(filter);
        return result;
    }
};
