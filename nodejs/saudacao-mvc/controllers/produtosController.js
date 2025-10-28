const cadastrarModel = require("../models/cadastrarModel")

module.exports = {
    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: './views'})
    },
    camisetas: (req, res) =>{
        res.sendFile('camisetas.html', {root: './views'})
    },
    cadastarProduto: (req, res) => {
        res.sendFile("cadastrarProduto.html", {root: './views'})
    },
    cadastrado: (req, res) => {
        const {id, descricao, quantidade, preco} = req.body
        const mensagemCadastrado = cadastrarModel.mensagemCadastrado(id, descricao, quantidade, preco)
        res.send (`<h1>${mensagemCadastrado}</h1>`)
    } 
}