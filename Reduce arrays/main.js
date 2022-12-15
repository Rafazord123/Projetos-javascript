//Reduce

//Some todos os numeros (reduce)
// retorne um array com os pares(filter)
//retorne um array com o dobro dos valores(map)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador += valor;
    return acumulador;
}, 0)
console.log(total);

const numerosPares = numeros.reduce(function(acumulador,valor){
    if(valor % 2 === 0) acumulador.push(valor)
        return acumulador;
    
}, [])
//console.log(numerosPares)

const valorDobrado = numeros.reduce(function(acumulador,valor){
    acumulador.push(valor * 2)
    return acumulador
}, []);
//console.log(valorDobrado);

// Retorne o mais velho
const pessoas = [
    {nome: 'Rafael', idade: 23},
    {nome: 'Adriane', idade: 22},
    {nome: 'Neymar', idade: 30},
    {nome: 'Cloe', idade: 26},
    {nome: 'Pelé', idade: 75},
    {nome: 'Gisele Bunchen', idade: 33},
];

const maisVelho = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor;
});
//console.log(maisVelho);

// Filter + map + reduce

// retorne a soma do dobro de todos os pares
// filtar pares(filter)
// dobrar pares(map)
// somar pares(reduce)

const somaPares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2).reduce((acumula,valor) => acumula += valor
);
//console.log(somaPares);


// forEach

const a1 = [10,20,30];
let resultado = 0;
a1.forEach(valor => resultado += valor);
console.log(resultado);
