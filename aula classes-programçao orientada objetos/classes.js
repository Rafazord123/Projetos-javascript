class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beberr() {
        console.log(`${this.nome} está bebendo`)
    }
}
const p1 = new Pessoa ('Rafael','Batista');
p1.falar()
console.log(p1)