// Maneira de exportar

export const nome = 'Rafael';
export const sobrenome = 'Batista';
export const idade = '23'
const cpf = 1111111111; // nao será importado

export function soma (x,y) {
    return x + y;
}


// sempre que for importado sem chave sera importado o padrao
// mesmo que  eu chame a varivel por outro nome como (QualquerCoisa)
export  class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
 export default (x,y) => x * y;
 
    /// ou

//export { nome,sobrenome as secondName,idade,soma };