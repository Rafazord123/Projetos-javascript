// Tudo sobre Map objeto
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
const pessoas = [
{ id:3 , nome: 'Maria'},
{ id:2 , nome: 'Kaká'},
{ id:1 , nome: 'Ronaldo'}
];


//Dessa maneira ele me dara os valores em uma ordem diferente da do array pessoas e os numeros(1 , 2, 3) serão strings
// const novasPessoas = {};
// for(let pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }
// console.log(novasPessoas);


//Usando o Map eu consigo da forma usar na ordem em que foi criado meu array
const novasPessoas = new Map();
for(let pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa })
}
console.log(novasPessoas); developer.mozilla.or/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

// for(let pessoa of novasPessoas.values()){
//     console.log(pessoa);
// }
novasPessoas.delete(2);
console.log(novasPessoas);