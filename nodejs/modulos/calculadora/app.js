import {soma, subtrai, multiplica, divide} from './funcoes_matematicas.js'
import {idade} from './calcula_idade.js'

const resultSoma = soma(1, 2)

const resultSubtrai = subtrai(1, 3)

const resultMultiplica = multiplica(9, 2)

const resultDivide = divide(2, 2)

console.log(resultSoma, resultSubtrai, resultMultiplica, resultDivide)


const idaders = idade(2009)
console.log("A IDADE CALCULADA É", idaders)