module.exports = {
    mensagemCadastrado: (id, descricao, quantidade, preco) => {
        let mensagemCadastro = `OIIIII, o produto cadastrado tem id ${id}, descrição ${descricao}, quantidade ${quantidade} e preço ${preco}`
        return `${mensagemCadastro}`
    }
}