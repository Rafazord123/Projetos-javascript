
// For in - Retorna o indice ou chave (string, arrays ou objetos)

const pessoas = {
    nome: 'Rafael',
    sobrenome: 'Batista',
    idade: 23
}

for(let chave in pessoas){
    console.log(chave, pessoas[chave]);
}