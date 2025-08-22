const Personagen = require("./src/class/Personagen")

// const personagen = [
//  new Personagen("everson", "Guerreiro", 100),
//  new Personagen("helder", "Maga", 80),
//  new Personagen("Enzo", "Arqueiro", 90)
// ]
// console.log(personagen)

const personagen1 = new Personagen("helder", "Maga", 80)
console.log(personagen1.nome)
console.log(personagen1.class)
console.log(personagen1.vida)

    
    
const personagen2 = new Personagen("everson", "Guerreiro", 100)
console.log(personagen2.nome)
console.log(personagen2.class)
console.log(personagen2.vida)

const personagen3 = new Personagen("Enzo", "Arqueiro", 90)
console.log(personagen3.nome)
console.log(personagen3.class)
console.log(personagen3.vida)

