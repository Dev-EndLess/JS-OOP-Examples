class Car {
  constructor(manufacturer, hp, doors, mileage = 0) {
    this.manufacturer = manufacturer
    this.hp = hp
    this.doors = doors
    this.mileage = mileage
  }

  log() {
    console.log(`I am a beautiful ${this.manufacturer}, with ${this.hp}hp; I have run for ${this.mileage}km.`)
  }

  ride(km) {
    this.mileage += km
  }
}

const sunnyRide = new Car('Volvo', 100, 2) // auto nuova, per default il mileage viene settato a 0
sunnyRide.ride(5)
sunnyRide.ride(15)
sunnyRide.ride(10)
sunnyRide.log() // l'automobile ha viaggiato 5 km e me lo segnala

const prettyCar = new Car('Wolksvagen', 60, 2, 1000) // auto usata, con gia' 1000km alle spalle
prettyCar.ride(50)
prettyCar.log()