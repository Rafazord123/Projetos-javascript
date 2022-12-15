const Cachorro = require('./Z/mod2');

const c2 = new Cachorro('Tchutchucão');
//c2.latir();

//console.log(__filename); // caminho completo
//console.log(__dirname); // caminho quase completo


const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '..','..', 'aquivos' ,' imagens'))
