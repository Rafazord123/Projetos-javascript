//           importa o modulo inteiro
//const mod1 = require('./mod1')
//const falaNome = mod1.falaNome;
//console.log(mod1)
//console.log(falaNome())


//          importa somente 1 coisa da outra pasta
//const falaNome = require('./mod1').falaNome;
//console.log(falaNome())

//         importa varias coisas

const { nome,sobrenome,falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());