class Car {
  constructor(name, model, weight, colors, maxspeed, category) {
    this.name = name
    this.model = model
    this.weight = weight
    this.colors = colors
    this.maxspeed = maxspeed
    this.category = category
  }



  carModel() {
    console.log(`This car is a ${this.name} ${this.model} Model. The max speed of this car is ${this.maxspeed} km/h`)
  }

  coloriDisponibili() {
    console.log('Colori Disponibili:');
    this.colors.forEach(color => {
      console.log('  ', color)
    });
  }

  // settare le auto 'slow' 'normal' 'fast' 'very fast'
  // <= 200kg/h slow // <= 220km/h normal //
  // <= 240km/h fast // >= 260km/h very fast

  velocita() {
    if (this.maxspeed >= 240) {
      console.log('Category: Very Fast')
    }
    else if (this.maxspeed >= 220) {
      console.log('Category: Fast')
    }
    else if (this.maxspeed >= 200) {
      console.log('Category: Normal')
    }
    else {
      console.log('Category: Slow')
    }
  }

  test() {
    console.log('test')
  }

  suonaClacson() {
    console.log('Beep beep')//const suonaClacson = () =>  console.log8
  }


  // se una macchina (con maggiore speed) 
  // gareggia contro una macchina (con minore speed ) = la
  // macchina + veloce vince

}

function printSep() {
  console.log(' ');
}

const printSepArrow = () => console.log(' ');
const fiatcolors = ['- red', '- white', '- grey', '- yellow']
const fiatPunto = new Car('Fiat Punto', 500, '800', fiatcolors,
  180, 'slow')
fiatPunto.carModel()
fiatPunto.coloriDisponibili()
fiatPunto.velocita()
fiatPunto.test()
fiatPunto.suonaClacson()

printSep()


class Car2 {
  constructor(param) {
    this.name = param.name
    this.model = param.model
    this.weight = param.weight
    this.colors = param.colors
    this.maxspeed = param.maxspeed
    this.category = param.category
  }

  carModel() {
    console.log(`This car is a ${this.name} ${this.model} Model. The max speed of this car is ${this.maxspeed} km/h`)
  }

  coloriDisponibili() {
    console.log('Colori Disponibili:');
    this.colors.forEach(color => {
      console.log('  ', color)
    });
  }

  // settare le auto 'slow' 'normal' 'fast' 'very fast'
  // <= 200kg/h slow // <= 220km/h normal //
  // <= 240km/h fast // >= 260km/h very fast

  velocita() {
    if (this.maxspeed >= 240) {
      console.log('Category: Very Fast')
    }
    else if (this.maxspeed >= 220) {
      console.log('Category: Fast')
    }
    else if (this.maxspeed >= 200) {
      console.log('Category: Normal')
    }
    else {
      console.log('Category: Slow')
    }
  }

  test() {
    console.log('test')
  }

  suonaClacson() {
    console.log('Beep beep')//const suonaClacson = () =>  console.log
  }


  // se una macchina (con maggiore speed) 
  // gareggia contro una macchina (con minore speed ) = la
  // macchina + veloce vince

}

const alfaParam = {
  name: 'Alfa Romeo',
  model: 'Giulia',
  weight: '1100kg',
  colors: ['- red', '- white', '- grey', '- blue'],
  maxspeed: 210,
  category: 'normal'
}
const alfa = new Car2(alfaParam)
alfa.carModel()
alfa.coloriDisponibili()
alfa.velocita()
alfa.test()

printSepArrow()



const volkswagen = new Car('Volkswagen Golf', 'GTI', '900kg',
  ['- red', '- white', '- grey', '- blue'],
  190, 'slow')
volkswagen.carModel()
volkswagen.coloriDisponibili()
volkswagen.velocita()
volkswagen.test()

printSep()


const audi = new Car('Audi', 'A4', '1300kg',
  ['- black', '- white', '- grey', '- orange'],
  230, 'fast')
audi.carModel()
audi.coloriDisponibili()
audi.velocita()
audi.test()

printSep()


const lambo = new Car('Lamborghini', 'Gallardo', '1200kg',
  ['- red', '- orange', '- yellow', '- purple'],
  260, 'very fast')
lambo.carModel()
lambo.coloriDisponibili()
lambo.velocita()
lambo.test()

printSep()
