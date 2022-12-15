class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
            });  
    }
    isSequencia () {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);

        this.novoCPF = cpfParcial + digito1 + digito2;
        //console.log(typeof this.novoCPF)
    }
    // da pra usar static pq eu nao tenho nenhuma instacia(this) dentro
    // mas eu preciso mudar o this.criaDigito para ValidaCPF.criaDigito
    static criaDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length +1;

        for(let stringNumerica of cpfParcial) {
            //console.log(stringNumerica, reverso)
            total += reverso * Number(stringNumerica);
            reverso --;
        }
        //console.log(total)
        const digito = 11 - (total % 11);
        return digito > 9 ? '0': String(digito);
    }
    valida () {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
    
    
}
// const cpf = new ValidaCPF('489.807.888-51');
// if(cpf.valida()) {
//     console.log('CPF válido');
// }else {
//     console.log('CPF inválido')
// }
// //console.log(cpf)
