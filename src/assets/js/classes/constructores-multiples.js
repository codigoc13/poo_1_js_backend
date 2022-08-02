class Persona {
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais)
  }

  //   constructor(obj) {
  //   }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre
    this.apellido = apellido
    this.pais = pais
  }

  get getinfo() {
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
  }
}

const nombre1 = 'Melissa',
  apellido1 = 'Flores',
  pais1 = 'México'

const persona1 = new Persona(nombre1, apellido1, pais1)

const loza = {
  nombre: 'Anderson',
  apellido: 'Lozano',
  pais: 'Colombia',
}

const persona2 = Persona.porObjeto(loza)

persona1.getinfo
persona2.getinfo
