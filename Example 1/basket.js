// Game : classe che definisce la partita
// Team : classe che definisce la squadra
// Player : classe che definisce il giocatore
// game.start inizia la partita

import Team from './Team.js'
import Player from './Player.js'

class Game {
  constructor(teamA, teamB) {
    this.teamA = teamA
    this.teamB = teamB
  }

  start = () => {
    this.printSeparator()
    this.presentaSquadre()
    
    this.printSeparator()
    console.log('Partita iniziata!')
    this.printSeparator()
  }

  presentaSquadre() {
    console.log(`Oggi si sfidano ${this.teamA.name} e ${this.teamB.name}!`)

    console.log(`Il capitano dei ${this.teamA.name} e': ${this.teamA.capitano}.`);
    this.teamA.logStatistiche()

    console.log(`Il capitano dei ${this.teamB.name} e': ${this.teamB.capitano}.`);
    this.teamB.logStatistiche()
  }

  printSeparator() {
    console.log('***')
  }

  finish(winner) {
    console.log(`${winner.name} won the game!`);

    if (winner === this.teamA) {
      this.teamA.won()
      this.teamB.lost()
    } else if (winner === this.teamB) {
      this.teamB.won()
      this.teamA.lost()
    }
  }
}

const bulls = new Team('Bulls', 'Jordan', 20, 7, 3)
const hornets = new Team('Hornets', 'Mourning', 16, 9, 5)
const finale = new Game(bulls, hornets)

finale.start()

finale.finish(hornets)

bulls.logStatistiche()
hornets.logStatistiche()




const magnifico = new Player('Walter Magnifico', 10, 11000)
magnifico.report()
const baudo = new Player('Pippo Baudo', 7, 1100)
baudo.report()
const berlusconi = new Player('Silvio Berlusconi', 1, 2)
berlusconi.report()
const durso = new Player('Barbara Durso', 22, 99)
durso.report()
