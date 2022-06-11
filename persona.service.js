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

const Persona = {
    buscarPersonaIniciales: function (objIniciales){
        /*
        Objeto Iniciales: 
            {
                nombre: 'A',
                apellido: 'C'
            }
        */
       let arrPersonas = []
       personas.map( persona => {
           // Inicial nombre
           let iniNombre    = persona.nombre[0].toUpperCase()
           let iniApellido  = persona.apellido[0].toUpperCase()

           if(iniNombre === objIniciales.nombre.toUpperCase() && iniApellido === objIniciales.apellido.toUpperCase()){
            arrPersonas.push(persona)
           }
       })

       return {
           personas: arrPersonas
       }
    }
}

    const Edades = {
        buscarEdadPersonas: function() {
            
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


module.exports = Persona
