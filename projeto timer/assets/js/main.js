

// Só necessario se eu usasse o outro codigo abaixo
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
function relogio () {
  const relogio = document.querySelector('.relogio');

  function getFormatoDataEmSegundos(seconds) {
    let data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  let seconds = 0;
  let timer;
  function startRelogio() {
    timer = setInterval(() => {
      seconds ++;
      relogio.innerHTML = getFormatoDataEmSegundos(seconds);
    }, 1000);
  }
  
  
    document.addEventListener('click', function(e) {
      const el = e.target;
    
      if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        startRelogio();
      }
      if(el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
      }
      if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
      }
    });
}

relogio();

//    MESMA COISA QUE O DE CIMA, SÓ QUE DEIXA O CODIGO MAIS PESSADO


// iniciar.addEventListener('click', function(event) {
//   relogio.classList.remove('zerado');
//   relogio.classList.remove('pausado')
//   clearInterval(timer);
//   startRelogio();
// } );

// pausar.addEventListener('click', function(event) {
//   relogio.classList.add('pausado')
//   clearInterval(timer);
// } );

// zerar.addEventListener('click', function(event) {
//   relogio.classList.add('zerado');
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00';
//   seconds = 0;
// } );
