const LocationModel = require("../models/LocationModel");

module.exports = class LocationController {
    static async index(req, res) {
        const result = await LocationModel.getAll();
        console.log(result);
        res.status(200).send(result);
    }

    static async show(req, res) {
        const id = parseInt(req.params.id);
        const result = await LocationModel.getById(id);
        console.log(result);
        res.status(200).send(result);
    }

    static async store(req, res) {
        const object = req.body;
        const result = await LocationModel.create(object);
        console.log(result);
        res.status(201).send(result);
    }

    static async update(req, res) {
        const id = parseInt(req.params.id);
        const object = req.body;
        const result = await LocationModel.updateById(id, object);
        console.log(result);
        res.status(200).send({ _id: id, ...object });
    }

    static async destroy(req, res) {
        const id = parseInt(req.params.id);
        const result = await LocationModel.deleteById(id);
        console.log(result);
        res.status(204).send(result);
    }
};
