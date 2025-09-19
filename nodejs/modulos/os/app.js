import os from 'os' //importa o modulo os

console.log(os.platform()) //imprime o sistema operacional no console
console.log('Arquiquetura do sistema:', os.arch()) //imprime a arquitetura do sistema no console
console.log('Quantidade de CPUs:', os.cpus().length) //imprime a quantidade de cpus do sistema no console
console.log('Memoria total (bytes):', os.totalmem()) //imprime a quantidade de memoria total do sistema no console
console.log("Memoria livre (bytes):", os.freemem())//imprime a quantidade de memoria livre do sistema no console