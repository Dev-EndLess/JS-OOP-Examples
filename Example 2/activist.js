class Activist {
  constructor(nome, cognome, eta, numOutreach, numAnniAttivismo, associazioni, citazione) {
    this.nome = nome
    this.cognome = cognome
    this.eta = eta
    this.numOutreach = numOutreach
    this.numAnniAttivismo = numAnniAttivismo
    this.associazioni = associazioni
    this.citazione = citazione
  }
  
  printSep() {
    console.log('');
    console.log(' ***');
    console.log('');
  }
  
  presentati() {
    this.printSep()
    console.log(`Hi my name is ${this.nome} ${this.cognome}
      and i made ${this.numOutreach} outreaches all around the world.
      I have been an activist since ${this.numAnniAttivismo}
      and i am here to share my knowledge with you guys.`)
  }

  urla() {
    console.log(`${this.nome} says: ${this.citazione}`)
  }

  esperienza() {
    console.log('Associazioni:');
    this.associazioni.forEach(element => {
    console.log('  ', element)      
    });
  }
}


const gary = new Activist('Gary', 'Yourofsky', 
44, 9999, 1997,
['peta', 'ADAPTT', 'AV'], 
'How would you feel, if the day that you were born, somebody else had already planned the day of your execution?' )
gary.presentati()
gary.esperienza()
gary.urla()

const joey = new Activist('Joey', 'Carbstrong',
38, 7684, 2009,
['AV' , 'Animal Equality'], 
'You get way more done with actions than with words' )
joey.presentati()
joey.esperienza()
joey.urla()

const earthlingsEd = new Activist('Earthlings', 'ED',
31, 8467, 2014, 
['Animal Save', 'Animal Equality'], 'Animals are here with us, not for us' )
earthlingsEd.presentati()
earthlingsEd.esperienza()
earthlingsEd.urla()