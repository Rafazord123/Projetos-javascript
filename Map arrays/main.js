//Map => altera o valor do array original e retorna

//Dobre todos os númertos do array

const numeros = [5,50,80,1,2,3,5,8,11,15,22,27];

const numerosDobrados = numeros.map( valor => valor * 2);
//console.log(numerosDobrados)

//Para cada elemento;
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave 'Nome' do objeto
//Adicione uma chave id em casa objeto
const pessoas = [
    {nome: 'Rafael', idade: 23},
    {nome: 'Adriane', idade: 22},
    {nome: 'Neymar', idade: 30},
    {nome: 'Cloe', idade: 26},
    {nome: 'Pelé', idade: 75},
    {nome: 'Gisele Bunchen', idade: 33},
];

const nomesPessoas = pessoas.map(obj => obj.nome);
//console.log(nomesPessoas)
const removeNome = pessoas.map(obj => ({idade: obj.idade}));
//console.log(removeNome);
const addChaveId = pessoas.map(function(obj,indice){
   obj.id = indice +1;
   return obj;
});
console.log(addChaveId)