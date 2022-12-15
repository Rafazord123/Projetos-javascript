/* IMC = Peso ÷ (Altura × Altura) */


function meuEscopo () {
const form = document.querySelector('.form');

function calculaImc(peso, altura) {
    altura = altura / 100;
    return peso / (altura * altura);
}

function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector('.peso.value');
    const altura = form.querySelector('.altura.value');
    const imc = calculaImc(peso, altura);
    if(imc <= 18.5){
      return  console.log(imc, '(Abaixo do peso)')
    }
}

form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();
