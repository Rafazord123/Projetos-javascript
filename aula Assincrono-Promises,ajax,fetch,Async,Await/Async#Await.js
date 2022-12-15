function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return;
        }
        setTimeout(() => {
            resolve(msg);
            return;
        }, tempo);
    });
}
//Async e Await

async function executa () {
    try {
        const fase0 =  esperaAi('Fase 0', 1000); // sem await fica {pending}
        console.log(fase0);

        setTimeout(()=> {
            console.log('Esta promise estava pendente' , fase0)
        }, 1100)

        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
        console.log('Terminamos na fase:', fase3)
    } catch(e) {
        console.log(e);
    }
    

}
//executa();
const teste1 = esperaAi('qualquer coisa', 5000)
console.log(teste1);// nao vai aparecer no console pq n tem o then()




// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand())
//     }).then(fase => {
//         console.log(fase)
//         return fase;
//     }).then(fase =>{
//         console.log('Terminamos as fases', fase)
//     })
//     .catch(e => console.log(e))