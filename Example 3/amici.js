// simulazione di un videogioco: un personaggio

class Persona {
  constructor(personName, age, sex, favWordM, favWordF) {
    this.name = personName
    this.age = age
    this.favWordM = favWordM
    this.favWordF = favWordF
    this.amici = []
    this.sex = sex
  }

  diventaAmicoDi(altraPersona) {
    this.amici.push(altraPersona)
  }

  saluta() {
    console.log(`Come stai ${this.favWordM}? Sono ${this,this.name}, ho ${this.age} anni.`)
  }

  salutaGliAmici() {
    if (this.amici.length === 0) console.log('ma a chi vuoi che saluti..? :(')
    else {
      this.amici.forEach(amico => {
        const favWord = amico.sex === 'f' ? this.favWordF : this.favWordM
        console.log(`Hey ${amico.name}, come stai ${favWord}?`)
      })
    }
  }
}

const fabri = new Persona('Fabri', 33, 'm', 'stronzo', 'stronza')
fabri.saluta() // dice: 'Come stai, stronzo? Sono Fabri, ho 33 anni'

const debora = new Persona('Debora', 26, 'f', 'tesoro', 'tesoro')
debora.saluta()

fabri.salutaGliAmici() // fabri non ha ancora amici

fabri.diventaAmicoDi(debora) // fabri ha una amica

fabri.salutaGliAmici() // fabri saluta la sua amica