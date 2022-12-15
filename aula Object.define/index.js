function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque,  // valor
        writable: false, //pode alterar ou não
        configurable: true // pode configurar ou não
    });
    Object.defineProperties(this, {
        nome :{
        enumerable: true, //Mostra a chave
        value: nome,  // valor
        writable: false, //pode alterar ou não
        configurable: true // pode configurar ou nã
        },
        preco: {
        enumerable: true, //Mostra a chave
        value: preco,  // valor
        writable: false, //pode alterar ou não
        configurable: true // pode configurar ou nã
        }
    });
}

const p1 = new Produto('Camiseta', 19.90, 5);
p1.estoque = 10;
//console.log(p1);
//console.log(Object.keys(p1));
for(let chave in p1){
    //console.log(p1[chave]);
}

// Getters and Setters

function Produto2(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        configurable: true,// pode configurar ou não
        enumerable: true, //Mostra a chave
        get: function(){
            return estoquePrivado;
        },
        set: function (valor) {
            if(typeof valor !== 'number'){
                //console.log('Você digitou um valor incorreto')
                //return;
                throw new TipeError('mensagem')
            }
            estoquePrivado = valor;
        }
    });
}
const p10 = new Produto2('Shorts', 35.50, 10)
//p10.estoque = '500ssaaa';
//console.log(p10.estoque)

//funçao fabrica get and set

function criaProduto (nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}
const cria1 = criaProduto('Moletom');
console.log(cria1)
cria1.nome = 'qualquer coisa'
console.log(cria1.nome)
