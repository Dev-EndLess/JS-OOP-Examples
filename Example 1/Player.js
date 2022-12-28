class Player {
  constructor(name, number, points) {
    this.name = name
    this.number = number
    this.points = points
    this.livello = this.setLevel()
  }

  report() {
    console.group(`Player: ${this.name}`)
    console.log(`numero di maglia: ${this.number}`)
    console.log(`punti segnati: ${this.points}`)
    console.groupEnd()
    console.log(`il giocatore e' di livello ${this.livello}`)
  }

  setLevel() {
    if (this.points >= 10000) {
      return 'A'
    } 
    else if (this.points >= 1000) {
      return 'B'
    }
    else {
      return 'C'
    }
  }
}

export default Player