function retornaHora(data){
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });
}

try {
const data = new Date('01-01-1999 12:45:05');
const hora = retornaHora(11);
console.log(hora)
} catch(e) {
    //console.log(e);
}finally {
    console.log('Tenha um bom dia');
}



// function soma (x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error ('x e y precisam ser um número')
//     }
//     return x + y;
// }
// //testa o erro e catch nesse caso 
// //pega o erro e o transforma em imprime outra mensagem
// try {
//     console.log(soma(1, 2));
//     console.log(soma("1", 2));
//     }catch(error) {
//         console.log(error);
//         console.log('Esta mensagem vai aparecer ao inves do error');
