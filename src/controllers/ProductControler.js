const ProductModel = require("../models/ProductModel");

module.exports = class ProductController {
    static async index(req, res) {
        const result = await ProductModel.getAll();
        console.log(result);
        res.status(200).send(result);
    }

    static async show(req, res) {
        const id = parseInt(req.params.id);
        const result = await ProductModel.getById(id);
        console.log(result);
        res.status(200).send(result);
    }

    static async store(req, res) {
        const object = req.body;
        const result = await ProductModel.create(object);
        console.log(result);
        res.status(201).send(result);
    }

    static async update(req, res) {
        const id = parseInt(req.params.id);
        const object = req.body;
        const result = await ProductModel.updateById(id, object);
        console.log(result);
        res.status(200).send({ _id: id, ...object });
    }

    static async destroy(req, res) {
        const id = parseInt(req.params.id);
        const result = await ProductModel.deleteById(id);
        console.log(result);
        res.status(204).send(result);
    }
};
