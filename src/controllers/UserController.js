const UserModel = require("../models/UserModel");

module.exports = class UserController {
    static async index(req, res) {
        const result = await UserModel.getAll();
        console.log(result);
        res.status(200).send(result);
    }

    static async show(req, res) {
        const id = parseInt(req.params.id);
        const result = await UserModel.getById(id);
        console.log(result);
        res.status(200).send(result);
    }

    static async store(req, res) {
        const object = req.body;
        const result = await UserModel.create(object);
        console.log(result);
        res.status(201).send(result);
    }

    static async update(req, res) {
        const id = parseInt(req.params.id);
        const object = req.body;
        const result = await UserModel.updateById(id, object);
        console.log(result);
        res.status(200).send({ _id: id, ...object });
    }

    static async destroy(req, res) {
        const id = parseInt(req.params.id);
        const result = await UserModel.deleteById(id);
        console.log(result);
        res.status(204).send(result);
    }
};
