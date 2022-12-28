
class Person {
  constructor(nickname, sesso, anni = 0, dataDiNascita, vaccinato) {
    this.nickname = nickname
    this.sesso = sesso
    this.anni = anni
    this.dataDiNascita = dataDiNascita
    this.vaccinato = vaccinato
  }

  log() {
    const partialString = this.vaccinato ? '' : 'non ' 
    console.log(`Ciao ragazzi il mio nickname e' ${this.nickname} sono un ${this.sesso} di ${this.anni}anni e sono nato il ${this.dataDiNascita}. EndLessPain ${partialString}e' vaccinato.`)
  }

  increaseAge(anni) {
    this.anni += anni
  }

  changeNick(nickname) {
    this.nickname = nickname
  }

  hasGreenPass() {
    if (this.vaccinato) {
      console.log(`${this.nickname} has a valid green pass.`);
    } else {
      console.log(`${this.nickname} does not have a valid green pass.`);
    }
  }

  vaxinate = () => {
    this.vaccinato = true
  }
}

const fabri = new Person('endless', 'maschio', 33, '20/06/1988', false)
fabri.increaseAge(3)
fabri.changeNick('EndLessPain')
fabri.hasGreenPass()
fabri.log()
fabri.vaxinate()
fabri.hasGreenPass()

// const paul = new Person('TutorIsland','maschio',36,'10/03/1985')
// paul.log()










// class Ram {
//   constructor(gb = 0,frequenza,latenza) {
//   this.gb = gb
//   this.frequenza = frequenza
//   this.latenza = latenza
//   }

//   log() {
//     console.log(`questa ram ha ${this.gb}GB e una frequenza di ${this.frequenza}mhz e queste sono le sue latenze ${this.latenza}`)
//   }

//   upgrade(gb) {
//     this.gb += gb
//   }

// }


// const gskill = new Ram(4, 800, '7-8-7',)

// gskill.upgrade(4)
// gskill.upgrade(8)
// gskill.log()

// const corsair = new Ram(8, 1600, '14-16-14')
// corsair.specifike()

// const adata = new Ram()
// const kingstone = new Ram()





// class processor { 
//   constructor(core,thread,mhz = 0,cache,){
//   this.core = core
//   this.thread = thread
//   this.mhz = mhz
//   this.cache = cache
//   }

//   log() {
//     console.log(`questo processore ha ${this.core}core e ${this.thread}thread, la sua frequenza e' di ${this.mhz} e ha ${this.cache}di cache L2`) 
//   }

//   overclock(mhz) {
//     this.mhz += mhz
//   }


// }


// const ryzen3 = new processor(4,4,3200,'2MB')
// ryzen3.overclock(200)
// ryzen3.overclock(400)
// ryzen3.log()

// const ryzen5 = new processor('6core','6thread','3600mhz','4cache')
// ryzen5.specifiche()

// const ryzen7 = new processor('8core','8thread','4000mhz','6cache')
// ryzen7.specifiche()

// const ryzen9 = new processor('12core','12thread','4400mhz','8cache')
// ryzen9.specifiche()












//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////




// class Computer {
//   constructor(processore, schedavideo, ram) {
//   this.processore = processore
//   this.schedavideo = schedavideo
//   this.ram = ram
//   }

//   componenti() {
//     console.log(`questo computer ha un processore con frequenza ${this.processore}, la scheda video che ho montato e' una ${this.schedavideo}, la memoria installata e' ${this.ram} di ram`)
//   }
// }

// const PC = new Computer('4400mhz', 'RX 570', '16 GB',)
// PC.componenti()










