/* 
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referi ao que foi cria pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo(__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-la. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/
//Prototype com função construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL'+' ' + this.nome + ' '+ this.sobrenome;
}
Pessoa.prototype.estouAqui = 'sdsdadsad'
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Rafael', 'Batista'); //<-- Função construtora
const data = new Date() //<-- Função construtor

console.log(pessoa1.nomeCompleto())
console.log(data)

//Prototype com funçao de fabrica
const falar = {
    falar() {
    console.log(`${this.nome1} está falando oi.`)
}
};
const comer = {
comer (){
    console.log(`${this.nome1} está comendo.`)
}
};
const beber = {
    beber() {
    console.log(`${this.nome1} está bebendo.`)
}
};

const pessoaPrototypes = { ...falar,...comer,...beber }

function criaPessoa(nome1,sobrenome1) {

    return Object.create(pessoaPrototypes, {
        nome1: {value: nome1},
        sobrenome1: {value: sobrenome1}
    });
}

const p1 = criaPessoa('Neymar', 'Junior')
const p2 = criaPessoa('mar', 'ior')
console.log(p1)
console.log(p2)
p1.falar()
p1.beber()
p1.comer();
