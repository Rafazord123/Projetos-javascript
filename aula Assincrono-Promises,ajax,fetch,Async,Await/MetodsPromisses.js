function rand(min,max) {
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, tempo) {
  return  new Promise((resolve, reject) =>{
    
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject(new Error('ERRO'))
                return;
                }

            resolve(msg.toUpperCase() +' - '+ 'Passei na promise')
            return;
        }, tempo);
    });
}

const Promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    esperaAi(1000, rand(1, 3)),
    //'Outro valor'
];
// Promise.all() resolve todas promesssas
// Promise.all(Promises)
// .then(valor => {
//     console.log(valor);
// })
// .catch(erro => {
//     console.log(erro);
// });

//Promise.race() Mostra o que resolver primeiro
// Promise.race(Promises)
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// }) 

//Promise.resolve() cai no then logo de cara
//  function baixaPagina() {
//     const emCache = false;

//     if(emCache) {
//         return Promise.resolve('Página em cache')
//     }else {
//         return esperaAi('Baixei a pagina', 2000)
//     }
//  }
//  baixaPagina()
//  .then(dadosPagina => {
//     console.log(dadosPagina)
//  })
//  .catch(erro => {
//     console.log(erro)
//  });

// Promise.rejct() cai no catch logo de cara
 function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache')
    }else {
        return esperaAi('Baixei a pagina', 2000)
    }
 }
 baixaPagina()
 .then(dadosPagina => {
    console.log(dadosPagina)
 })
 .catch(erro => {
    console.log(erro)
 });