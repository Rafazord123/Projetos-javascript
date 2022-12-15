function criaCalculadora() {
  return {
    display: document.querySelector('.display'),


    inicia() {
      this.cliqueBotao();
      this.pressionaEnter();
      this.pressionaBackSpace()
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearCalculadora();
        }
      });
    },


    cliqueBotao() {
      document.addEventListener('click', e => {
        const el = e.target;
        console.log(e.target);

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearCalculadora();
        }
        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }
        if (el.classList.contains('btn-equal')) {
          this.realizaConta();
        }
        this.display.focus();
      })
    },
    pressionaEnter() {
      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
    clearCalculadora() {
      this.display.value = '';
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    }
  };
}


const calculadora = criaCalculadora();
calculadora.inicia();