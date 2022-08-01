const tola = {
  nombre: 'Juan',
  edad: 22,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  },
}

tola.imprimir()

const maruja = {
  nombre: 'Valentina',
  edad: 19,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  },
}

maruja.imprimir()

// Forma para compatibilidad con navegadores muy viejos
function Persona(nombre, edad) {
  console.log('Se ejecutó esta línea')

  this.nombre = nombre
  this.edad = edad
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  }
}

const loza = new Persona('Anderson', 18)

loza.imprimir()
