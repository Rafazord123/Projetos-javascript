
//import { nome,secondName,idade,soma, pessoa, Pessoa as OutraCoisa } from './modulo1';
//const nome = 'Ronaldo'
//console.log(nome,secondName,idade)
//const p1 = new OutraCoisa('Adriane','Zanzarine')

//         IMPORTA TUDO
import * as MeuModulo from './modulo1'
//console.log(MeuModulo)


//        DEFAULT 
// sempre que for importado sem chave sera importado o padrao
// mesmo que  eu chame a varivel por outro nome como (QualquerCoisa)
 import QualquerCoisa, { nome,sobrenome,idade,soma } from './modulo1'
 console.log(QualquerCoisa(5,10))
 console.log(nome,sobrenome,idade,soma(10,10))
