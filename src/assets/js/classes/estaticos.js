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
}

const spiderman = new Persona(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino'
)
const ironman = new Persona('Tony Stark', ' Ironman', 'Yo soy Ironman')

const romanoff = new Persona(
  'Natasha Romanoff',
  'Black Widow',
  'El sol se está ocultando'
)

console.log(`El conteo estático de persona es :${Persona._conteo}`)
Persona.getConteo
Persona.mensaje()
