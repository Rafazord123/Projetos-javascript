class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log('Dispositvo ja está ligado')
            return;
        }
        this.ligado = true
    };
    desligado() {
        if(!this.ligado) {
            console.log('Dispositvo ja está desligado')
            return;
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor (nome,cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Motorola', 'Preto', 'Moto G5')
//s1.ligar();
//s1.desligado();
//console.log(s1.ligado)
class Tablet extends DispositivoEletronico {
    constructor(nome,temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Olha você alterou o método ligar');
    }
    falaOi () {
        console.log('Falando oi');
    }
}
const t1 = new Tablet('Ipad', true)
t1.ligar()
t1.falaOi();
console.log(t1.ligado) // o ligado so esta apenas no pai que é o DispositvoEle...