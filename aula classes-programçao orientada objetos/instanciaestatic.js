class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Método instancia
    aumentaVolume() {
        this.volume += 2;
    }
    diminuiVolume() {
        this.volume -= 2;
    }

    //Método static 
    static trocaPilha() {
        console.log('Ok, já vou trocar');
    }
}
const controle1 = new ControleRemoto ('LG')
controle1.aumentaVolume()
controle1.aumentaVolume()
//controle1.trocaPilha() // nao vai conseguir achar pq ele é nao é uma instancia
console.log(controle1)
ControleRemoto.trocaPilha()// nao tem acesso aos dados da classe ex:(this.tv e this.volume)
