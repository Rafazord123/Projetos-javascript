

//        MANEIRA MAIS RAPIDA 1
// const h1 = document.querySelector('.container h1');
// h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())




//     OUTRA MANEIRA 2

// const container = document.querySelector('.container');
// const data = new Date();

// function getDayWeek (diaDaSemana) {
//   const diasDaSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira',
//   'Quinta-feira','Sexta-feira','Sabado'];
//   return diasDaSemana[diaDaSemana];
// }
// function getNomeMes (numeroMes) {
//   const meses = ['janeiro','fevereiro','maio','abril','março','junho','julho','agosto',
// 'setembro','outubro','novembro','dezembro'];
// return meses[numeroMes];
// }
// function zeroAEsquerda (num) {
//   return num >=10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDayWeek(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`

// }
// container.innerHTML = criaData(data);
 





///                    MANEIRA QUE EU FIZ 3
// const container = document.querySelector('.container');

// const data = new Date();
// const diaDaSemana = data.getDay();
// const diaDaSemanaTexto = getDayWeek(diaDaSemana);
// const nomeMes = data.getMonth();
// const nomeMesTexto = getNameMonth(nomeMes);

// function getDayWeek(diaDaSemana) {
//   let diaDaSemanaTexto;

//   switch (diaDaSemana) {
//     case 0:
//       diaDaSemanaTexto = 'Domingo'
//       return diaDaSemanaTexto;
//   }
//   switch (diaDaSemana) {
//     case 1:
//       diaDaSemanaTexto = 'Segunda'
//       return diaDaSemanaTexto;
//   }
//   switch (diaDaSemana) {
//     case 2:
//       diaDaSemanaTexto = 'Terça'
//       return diaDaSemanaTexto;
//   }
//   switch (diaDaSemana) {
//     case 3:
//       diaDaSemanaTexto = 'Quarta'
//       return diaDaSemanaTexto;
//   }
//   switch (diaDaSemana) {
//     case 4:
//       diaDaSemanaTexto = 'Quinta'
//       return diaDaSemanaTexto;
//   }
//   switch (diaDaSemana) {
//     case 5:
//       diaDaSemanaTexto = 'Sexta'
//       return diaDaSemanaTexto;
//   }
//   switch (diaDaSemana) {
//     case 6:
//       diaDaSemanaTexto = 'Sabado'
//       return diaDaSemanaTexto;

//       default:
//          diaDaSemanaTexto = '';
//   }
  
// }
// function getNameMonth (nomeMes) {
//   let nomeMesTexto;
  
//   switch(nomeMes) {
//     case 0: 
//      nomeMesTexto = 'Janeiro';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 1: 
//      nomeMesTexto = 'Fevereiro';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 2: 
//      nomeMesTexto = 'Março';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 3: 
//      nomeMesTexto = 'Abril';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 4: 
//      nomeMesTexto = 'Maio';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 5: 
//      nomeMesTexto = 'Junho';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 6: 
//      nomeMesTexto = 'Julho';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 7: 
//      nomeMesTexto = 'Agosto';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 8: 
//      nomeMesTexto = 'Setembro';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 9: 
//      nomeMesTexto = 'Outubro';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 10: 
//      nomeMesTexto = 'Novembro';
//      return nomeMesTexto
//   }
//   switch(nomeMes) {
//     case 11: 
//      nomeMesTexto = 'Dezembro';
//      return nomeMesTexto

//      default:
//       return nomeMesTexto = '';
//   }
// }

// function getDate(data) {
//   const dia = data.getDate();
//   const mes = getNameMonth(data.getMonth());
//   const ano = data.getFullYear();
//   const hora = data.getHours();
//   const minuto = data.getMinutes();
//   const segundos = data.getSeconds();

//   return `${dia} de ${mes} de ${ano} ${hora}:${minuto}:${segundos}`
// }
// const mefala = getDate(data);
// container.innerHTML = `<strong>${diaDaSemanaTexto}, ${mefala}</strong>`;


