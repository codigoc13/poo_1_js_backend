class Persona {
  static _conteo = 0
  static get getConteo() {
    console.log(`${this._conteo} instancias`)
  }
  static mensaje() {
    console.log('Hola, soy un método estático')
  }

  comidaFavorita = ''
  nombre = ''
  edad = ''
  frase = ''

  constructor(nombre, edad, frase) {
    this.nombre = nombre
    this.edad = edad
    this.frase = frase
    Persona._conteo++
  }

  set setComidaFavorita(comida) {
    this.comidaFavorita = comida.toUpperCase()
  }

  get getComidaFavorita() {
    console.log(
      `La comida favorita de ${this.nombre} es ${this.comidaFavorita}`
    )
  }

  quienSoy() {
    console.log(`Mi nombre es ${this.nombre} y mi frase es '${this.frase}'`)
  }
}

// const spiderman = new Persona(
//   'Peter Parker',
//   'Spiderman',
//   'Soy tu amigable vecino'
// )

class heroe extends Persona {
  clan = 'Sin clan'
  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase)
    this.clan = clan
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y pertenzco a los ${this.clan}`)
    super.quienSoy()
  }
}

const spiderman = new heroe(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino',
  'Avenger'
)
spiderman.setComidaFavorita = 'Hot dogs'

console.log(spiderman)

spiderman.getComidaFavorita

spiderman.quienSoy()
