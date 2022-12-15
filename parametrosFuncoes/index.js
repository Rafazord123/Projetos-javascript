//Funçoes geradoras
function* geradora1() {
    //Código
    yield 'Valor 1';
    //Código
    yield 'Valor 2';
    //Código
    yield 'Valor 3';
}

function* geradora2 () {
    yield* geradora1();
    yield 'Valor 4'
    yield 'Valor 5'
    yield 'Valor 6'
    yield 'Valor 7'
}
const geraTudo = geradora2();

for(let valor of geraTudo) {
    console.log(valor);
}

function* geradora5(){
    yield function () {
        console.log('vim do y1')
    }

    //..

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const funct1 = g5.next().value;
const funct2 = g5.next().value;
funct1();
funct2();







// Factory Functions
// function criaPessoa(nome, sobrenome, a, p){
//     return{
//         nome,
//         sobrenome,
//         fala(assunto) {
//             if(this.imc() >= 21){
//                 assunto = 'está na média de peso'
//             } else {
//                 assunto ='abaixo da média de peso'
//             }
//             return `${this.nome} está ${assunto}.`;
//         },
//         altura: a,
//         peso: p,
//        imc() {
//             const indice = this.peso / (this.altura * this.altura);
//             return indice.toFixed(2);
//         }
//     }
// }

// const p1 = criaPessoa('Rafael','Batista', 1.76,70);
// console.log(p1.imc(), p1.fala());

// const p2 = criaPessoa('Matheus','Batista', 1.78,65);
// console.log(p2.imc(), p2.fala());




// arguments que sustenta todos os argumentos enviados
// function  funcao(a,b,c) {
//     let total = 0;

//     for(let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, a,b,c)
// }
// funcao(1,2,3,4,5,6,7,8,9,10)

// // caso o B nao tenha valor ele assumira o 2 automaticamente
// function  soma(a,b=2) {
//     console.log(a + b);
// }
// soma(2)

// // enviar um objeto literal como argumento
// function desestruturaçao({nome,sobrenome,idade}) {
//     console.log(nome,sobrenome,idade)

// }
// desestruturaçao({nome: 'Rafael', sobrenome:'Batista', idade:23})

// // desestruturaçao de array
// function desestruturaçaoArr([valor1,valor2,valor3]) {
//     console.log(valor1,valor2,valor3)
// }

// let array = ['Rafael','Batista',23];
// desestruturaçaoArr(array);

// function conta(operador, acumulador,...numeros) {
//     for(let numero of numeros) {
//         if(operador === '+')acumulador += numero;
//         if(operador === '-')acumulador -= numero;
//         if(operador === '/')acumulador /= numero;
//         if(operador === '*')acumulador *= numero;
//     }
//     console.log(acumulador)
// }

// conta('*', 1,2,3,4,5,6,7,8,9);

// Return

// function criaMultiplicador (multiplicador) {
//     return function(n) {
//         return n * multiplicador;
//     };
// }

// const duplica = criaMultiplicador(2);
// const triplica = criaMultiplicador(3);
// const quadriplica = criaMultiplicador(4);

// console.log(duplica(8));
// console.log(triplica(10));
// console.log(quadriplica(4));




// funçao callback


// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }
// console.log(rand())
// function f1 (callback) {
//     setTimeout(function() {
//         console.log('f1');
//         if(callback) callback();
//     }, rand());
// }
// function f2 (callback) {
//     setTimeout(function() {
//         console.log('f2');
//         if(callback) callback();
//     }, rand());
// }

// function f3 (callback) {
//     setTimeout(function() {
//         console.log('f3');
//         if(callback) callback();
//     }, rand());
// }

// f1(f1Callback);

// function f1Callback() {
//     f2(f2Callback);
// }

// function f2Callback () {
//     f3(f3Callback);
// }
// function f3Callback () {
//     console.log('Olá mundo')
// }



// OU

// f1(function() {
// f2(function() {
//     f3(function() {
//         console.log('Olá mundo')
//     });
// });
// });




//IIFE > Immediately invoked function expression

// (function(idade, peso, altura){
//     const sobrenome = 'Batista';
//     function criaNome(nome) {
//         return nome + ' '+ sobrenome;
//     }
//     function falaNome () {
//         console.log(criaNome('Rafael'));
//     }
//      falaNome()
//     console.log(idade, peso, altura);
// })(30, 80, 1.70)

