// Filter => Sempre retorna um array, com a mesma quantidade de elementos
// ou menos.

//        Return numeros maiores que 10.
//const numeros = [5,50,80,1,2,3,5,8,11,15,22,27];
// MANEIRA MAIS USADA E SIMPLES DO CALLBACK
//const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);
//                  
//        CORPO OU ESTRUTURA DE UM CALLBACK
// function callbackFilter(valor, indice,array) {
//     if(valor > 10){
//         return true;
//     }else {
//         return false;
//     }
// };
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);



// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pesspas com mais de 50 anos
// retorne as pessoas cujo o nome termine com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 24},
    {nome: 'Monica', idade: 55},
    {nome: 'Rafael', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 48},
]
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisDe50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);