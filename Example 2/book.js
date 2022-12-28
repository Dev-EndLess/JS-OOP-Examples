class Book {
  constructor(titolo, genere, autore, uscita, pagine) {
    this.titolo = titolo
    this.genere = genere
    this.autore = autore
    this.uscita = uscita
    this.pagine = pagine
  }

  printSep() {
    console.log(' ');
  }

  domanda1() {
    console.log(`Anche tu compri i libri di ${this.autore}??`)
  }

  risposta1() {
    console.log(`Si! Questo si chiama ${this.titolo}, e stato rilasciato nel ${this.uscita}.Mi ci vorra un po a leggerlo perche ha ${this.pagine} pagine`)
  }

  domanda2() {
    console.log(`Di cosa tratta ${this.titolo}??`)
  }

  risposta2() {
    console.log(`e un ${this.genere} ma non so ancora di cosa parla`)
  }

}

const libroF = new Book('La valle Magica', 'Fantasy', 'Giovanni', 2013, 350)
libroF.domanda1()
libroF.risposta1()
libroF.printSep()
libroF.domanda2()
libroF.risposta2()
libroF.printSep()

const libroR = new Book('Il Rosso e il nero', 'Romanzo', 'Luca', 2011, 500)
libroR.domanda1()
libroR.risposta1()
libroF.printSep()
libroR.domanda2()
libroR.risposta2()
libroR.printSep()

const libroH = new Book('Dracula', 'Horror','Daniela', 2014, 400)
libroH.domanda1()
libroH.risposta1()
libroF.printSep()
libroH.domanda2()
libroH.risposta2()
libroH.printSep()

const libroG = new Book('Il Grande Sonno', 'Giallo', 'Jessica', 2007, 700)
libroG.domanda1()
libroG.risposta1()
libroF.printSep()
libroG.domanda2()
libroG.risposta2()
libroG.printSep()