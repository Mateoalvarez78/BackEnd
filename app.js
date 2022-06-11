const Persona = require('./service/persona.service')

const test1 =  { nombre: 'A', apellido: 'C'}
console.log("Test 1 :: ", Persona.buscarPersonaIniciales(test1))

const test2 =  { nombre: 'P', apellido: 'F'}
console.log("Test 2 :: ", Persona.buscarPersonaIniciales(test2))

const test3 =  { nombre: 'X', apellido: 'Z'}
console.log("Test 3 :: ", Persona.buscarPersonaIniciales(test3))

const test4 =  { edad: 17}
console.log("Test 4 :: ", Edad.buscarEdadPersona(test4))

const test5 =  { edad: 14}
console.log("Test 5 :: ", Edad.buscarEdadPersona(test5))

const test6 =  { edad: 30}
console.log("Test 6 :: ", Edad.buscarEdadPersona(test6))
