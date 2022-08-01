class Persona {
  nombre = ''
  codigo = ''
  frase = ''

  // El constructor es el método que se va a ejecutar inmediatamente se cree una instancia de persona.
  // Es el único método que así se le diga que retorne un undefined, retornará la clase.
  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin código',
    frase = 'Sin frase'
  ) {
    // console.log('Hola')
    // return undefined
    // if (!nombre) throw 'Debe enviar un nombre'
    this.nombre = nombre
    this.codigo = codigo
    this.frase = frase
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi frase favorita es '${this.frase}'`)
  }
}

const marisol = new Persona('Marisol', 22, 'profe, haga el favor')
const juanPa = new Persona(
  'Juan Pablo',
  19,
  '**Algún bloque importante de código** - ¿lo borro?'
)

console.log(marisol)
console.log(juanPa)
marisol.quienSoy()

//===========================================

class Persona2 {
  comidaFavorita = ''

  constructor(nombre, edad, frase) {
    this.nombre = nombre
    this.edad = edad
    this.frase = frase
  }

  set setComidaFavorita(comida) {
    this.comidaFavorita = comida.toUpperCase()
  }

  get getComidaFavorita() {
    console.log(
      `La comida favorita de ${this.nombre} es ${this.comidaFavorita}`
    )
  }
}
const jordan = new Persona2('Jordan', 24, 'Hola muchachos')
jordan.setComidaFavorita = 'hamburguesa'
console.log(jordan)
jordan.getComidaFavorita
