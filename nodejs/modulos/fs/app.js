const fs = require('fs') //importa o modulo fs

fs.readFile("example.txt", 'utf-8', (err, data) => { //lê o arquivo example text
    if(err){ //se der erro
        console.error('erro ao ler o arquivo:', err) //retorna o erro
        return //retorna a função
    }
    console.log('Conteúdo do arquivo:', data) //lê o conteúdo do arquivo
})

console.log('Esta mensagem aparece primeiro') //é a primeira mensagem no console por node ser assincrono