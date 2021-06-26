const ProductModel = require("../models/ProductModel");

module.exports = class ProductControllerView {
    static async index(req, res) {
        const result = await ProductModel.getAll();
        console.log(result);
        
        let resposta = ""
        let respostaTabela = ""
        for(let i = 0; i < result.length; i++){
            resposta = resposta + "<p>"+ JSON.stringify(result[i].name) + "</p>"

            respostaTabela = respostaTabela + `<tr><td>${JSON.stringify(result[i]._id)}</td><td>${JSON.stringify(result[i].name)}</td><td>${JSON.stringify(result[i].description)}</td></tr>`

        }

        const objeto = {
            list: resposta,
            table: respostaTabela.replace(/"/g,"")
        }

        res.status(200).render("products", objeto);
    }

    // static async show(req, res) {
    //     const id = parseInt(req.params.id);
    //     const result = await ProductModel.getById(id);
    //     console.log(result);
    //     res.status(200).send(result);
    // }

    // static async store(req, res) {
    //     const object = req.body;
    //     const result = await ProductModel.create(object);
    //     console.log(result);
    //     res.status(201).send(result);
    // }

    // static async update(req, res) {
    //     const id = parseInt(req.params.id);
    //     const object = req.body;
    //     const result = await ProductModel.updateById(id, object);
    //     console.log(result);
    //     res.status(200).send({ _id: id, ...object });
    // }

    // static async destroy(req, res) {
    //     const id = parseInt(req.params.id);
    //     const result = await ProductModel.deleteById(id);
    //     console.log(result);
    //     res.status(204).send(result);
    // }
};
