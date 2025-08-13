class Personagen{

    constructor(nome, classe, vida){
        this.nome = nome
        this.class = classe
        this.vida = vida
    }
    Atacar(vida) {
        if (atacar > 0) {
            this.nome -= vida
            console.log(` atacou vocer ${vida}.`)

        }
    }    

}

module.exports = Personagen
