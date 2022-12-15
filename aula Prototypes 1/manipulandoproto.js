// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};
const objB = {
    chaveB: 'B'
    // __proto__: objA
};
const objC = new Object();
objC.ChaveC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
//console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (porcentual) {
    this.preco = this.preco - (this.preco * (porcentual / 100));
};
Produto.prototype.aumento = function (porcentual) {
    this.preco = this.preco + (this.preco * (porcentual / 100))
};
const p1 = new Produto('Camisa', 20);
const p2 = new Produto('Shorts', 50);
p2.desconto(90)
p1.aumento(100)
//console.log(p1)
//console.log(p2)
const p3 = {
    nome: 'Caneca',
    preco: 25 //-> a chave tem que bater com a do meu produto.prototype
}
Object.setPrototypeOf(p3, Produto.prototype)
p3.aumento(15)
//console.log(p3)
//              outra maneira
const p4 = Object.create(Produto.prototype)
p4.preco = 100;
p4.desconto(50);
console.log(p4);
const p5 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        value: 400,
        configurable: true
    },
    material: {
        writable: true,
        enumerable: false,// se quiser que o material aparece (true)
        value: 'Porcelana',
        configurable: true
    }
})
p5.aumento(100);
console.log(p5)

