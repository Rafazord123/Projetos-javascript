const nome = 'Rafael';
const sobrenome = 'Batista';

const falaNome = () => nome + ' '+ sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
//    ou

module.exports = {
    nome,sobrenome, falaNome
};


//         atalho
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualqueCoisa = 'Foda- se'
//console.log(exports)




