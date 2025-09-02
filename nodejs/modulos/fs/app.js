const fs = require('fs')

fs.readFile("example.txt", 'utf-8', (err, data) => {
    if(err){
        console.error('erro ao ler o arquivo:', err)
        return
    }
    console.log('Conteúdo do arquivo:', data)
})

console.log('Esta mensagem aparece primeiro')