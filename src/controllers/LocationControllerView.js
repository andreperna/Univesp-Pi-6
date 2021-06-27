const LocationModel = require("../models/LocationModel");

module.exports = class LocationControllerView {
    static async index(req, res) {
        const result = await LocationModel.getAll();
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

};
