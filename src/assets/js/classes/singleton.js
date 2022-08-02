class Singleton {
  static #instancia
  nombre = ''

  // const a = undefined
  // console.log(`a: ${a}`)
  // console.log(`!a: ${!a}`)
  // console.log(`!!a: ${!!a}`)

  // console.log(`Singleton.#instancia: ${Singleton.#instancia}`)
  // console.log(`!Singleton.#instancia: ${!Singleton.#instancia}`)
  // console.log(`!!Singleton.#instancia: ${!!Singleton.#instancia}`)

  constructor(nombre = '') {
    if (!!Singleton.#instancia) {
      return Singleton.#instancia
    }
    Singleton.#instancia = this
    this.nombre = nombre
  }
}

const instancia2 = new Singleton('Black Widow')
const instancia1 = new Singleton('Ironman')

console.log(`Nombre en persona es: ${instancia2.nombre}`)
console.log(`Nombre en persona es: ${instancia1.nombre}`)
