import {soma, subtrai, multiplica, divide} from './modulos/funcoes_matematicas.js'
import * as calcula_idade from './modulos/calcula_idade.js'

const resultSoma = soma(1, 2)

const resultSubtrai = subtrai(1, 3)

const resultMultiplica = multiplica(9, 2)

const resultDivide = divide(2, 2)

console.log(resultSoma, resultSubtrai, resultMultiplica, resultDivide)


console.log(calcula_idade.calcidade(2025, 2009))