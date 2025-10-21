module.exports = {
    checarLogin: (usuario, senha,) => {
        if (usuario == "Mauriculus" && senha == "senha"){
            login = 'dados corretos e está logado'
        } else {
            login = 'usuário ou senha incorreto'
        }
        return `Você inseriu ${login}`
    }
}