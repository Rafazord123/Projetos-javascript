const fs = require('fs').promises;

//flag: w = se já existi o conteudo ele apaga e reescreve no caso "frase 1"
//flag: a = adiciona mais conteudo a cada vez que é chamada
//   \n = quebra linha

module.exports = (caminho,dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
};
