const AssetModel = require("../models/AssetModel");

module.exports = class AssetController {
    static async index(req, res) {
        const result = await AssetModel.getAll();
        console.log(result);
        res.status(200).send(result);
    }

    static async show(req, res) {
        const id = parseInt(req.params.id);
        const result = await AssetModel.getById(id);
        console.log(result);
        res.status(200).send(result);
    }

    static async store(req, res) {
        const object = req.body;
        const result = await AssetModel.create(object);
        console.log(result);
        res.status(201).send(result);
    }

    static async update(req, res) {
        const id = parseInt(req.params.id);
        const object = req.body;
        const result = await AssetModel.updateById(id, object);
        console.log(result);
        res.status(200).send({ _id: id, ...object });
    }

    static async destroy(req, res) {
        const id = parseInt(req.params.id);
        const result = await AssetModel.deleteById(id);
        console.log(result);
        res.status(204).send(result);
    }
};
