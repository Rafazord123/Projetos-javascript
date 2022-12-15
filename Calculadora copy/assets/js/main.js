function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () =>{
    this.capturaClick();
    this.pressionaEnter();
    this.pressionaBackSpace();
  };
  this.pressionaBackSpace = () => {
    this.display.addEventListener('keydown', e => {
      if(e.keyCode === 8) {
      e.preventDefault();
      this.clearDisplay();
      }
    })
  }
  this.pressionaEnter = () => {
   this.display.addEventListener('keypress', e => {
      if(e.keyCode === 13){
        this.realizaConta();
      }
    })
  };
  this.capturaClick = () => {
    document.addEventListener('click', event =>{
      const el = event.target;

      if(el.classList.contains('btn-num')) this.btnParaDisplay(el);
      if(el.classList.contains('btn-clear')) this.clearDisplay();
      if(el.classList.contains('btn-del')) this.apagaUm();
      if(el.classList.contains('btn-equal')) this.realizaConta();
      this.display.focus();
    });
  }
  this.btnParaDisplay = el => this.display.value += el.innerText;
  this.clearDisplay = () => this.display.value = '';
  this.apagaUm = () => this.display.value = this.display.value.slice(0,-1);
  this.realizaConta = () => {
    let conta = this.display.value;
    try {
     conta =  eval(conta);
    this.display.value = String(conta);
    } catch (e) {
      alert('Conta inválida')
      return
    }
  }
}
const calculadora = new Calculadora();
calculadora.inicia();