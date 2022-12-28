class Team {
  constructor(name, capitano, win, lose, draw) {
    this.name = name
    this.capitano = capitano
    this.win = win
    this.lose = lose
    this.draw = draw

    this.logTeamPronto()
  }

  logTeamPronto() {
    console.log(`La squadra ${this.name} e' pronta!`);
  }

  logStatistiche() {
    console.group(`-- statistiche dei ${this.name} --`)
    console.log(`vinte: ${this.win}`)
    console.log(`perse: ${this.lose}`)
    console.log(`pari: ${this.draw}`)
    console.groupEnd()
  }

  won() {
    this.win++
  }

  lost() {
    this.lose++
  }
}

export default Team