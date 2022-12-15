// Produto -> aumento, desconto  Hyouka
// Camiseta = Cor,Caneca = Material
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantidade) {
    this.preco += quantidade;
};
Produto.prototype.desconto = function(quantidade) {
    this.preco -= quantidade;
};
function Camiseta (nome,preco,cor) {
    Produto.call(this, nome,preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(porcentagen) {
    this.preco = this.preco + (this.preco * (porcentagen / 100));
}

function Caneca(nome, preco, material,estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
        
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const caneca = new Caneca ('Brasil' , 20, 'Aluminio',15);
caneca.estoque = 50; // setter
console.log(caneca.estoque); //getter
console.log(caneca);
const camiseta = new Camiseta('Santos', 10, 'Branca');
camiseta.aumento(100);
//console.log(camiseta)