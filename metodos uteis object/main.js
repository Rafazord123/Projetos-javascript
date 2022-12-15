// Copiar um objeto dentro de outro objeto
//            ...Spread
const produto = {nome: 'Caneca', preco: 1.89 };
const outroProduto = { 
    ...produto,
    material: 'porcelana'
 };
outroProduto.nome = 'Qualquer produto'
//outroProduto.preco = 1.43;
//console.log(produto);
//console.log(outroProduto);
//       usando Object.assign()
const produto2 = {nome: 'Copo', preco: 1.89}
const caneca = Object.assign({},produto2,{material: 'porcelana'});

caneca.nome = 'Outro produto';
caneca.preco ='Diferente preço';
//console.log(produto2);
//console.log(caneca)

// Mostra as definiçoes de um obejto usando 
// Object.getOwnPropertyDescriptor()

const pessoa = {nome : 'Rafael', sobrenome: 'Batista'};
Object.defineProperty(pessoa,'nome', {
  writable: false,
  enumerable: true,
  configurable: true
});
pessoa.nome ='Ronaldo'
//console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))

//console.log(Object.values(pessoa));
//console.log(Object.keys(pessoa));
//console.log(Object.entries(pessoa));
// é possivel iterar usando Object.entries e usar descontructor
for(let [chave, valor] of Object.entries(pessoa)) {
    console.log(chave,valor)
}
