const personas = [
    {
        nombre: "Alex",
        apellido: "Casadevall",
        edad: 30
    },
    {
        nombre: "Pedro",
        apellido: "Fernandez",
        edad: 17

    },
    {
        nombre: "Alejandro",
        apellido: "Correa",
        edad: 14
    }
]
const Edad = {
        buscarEdadPersona: function() {

            let arrEdades = []
            personas.map(edades => {
                let edadPersona = edades.edad;

                if(edadPersona.edad <= 18 && edadPersona.edad >=10) {
                arrEdades.push(edadPersona)
                }
            })
            return {
                personas: arrEdades
            }
        }
    }
module.exports = Edad
