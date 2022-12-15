

// dentro de uma funçao
function getDayWeek (diaDaSemana) {
    let diaDaSemanaTexto;

    switch(diaDaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
        return diaDaSemanaTexto;
    }
    switch(diaDaSemana) {
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return diaDaSemanaTexto;
    }
    switch(diaDaSemana) {
        case 2:
            diaDaSemanaTexto = 'Terça';
            return diaDaSemanaTexto;
    }
    switch(diaDaSemana) {
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return diaDaSemanaTexto;
    }
    switch(diaDaSemana) {
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return diaDaSemanaTexto;
    }
    switch(diaDaSemana) {
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return diaDaSemanaTexto;
    }
    switch(diaDaSemana) {
        case 6:
            diaDaSemanaTexto = 'Sabadão';
            return diaDaSemanaTexto;
        default :
            diaDaSemanaTexto = '';
        
    }
    return diaDaSemanaTexto;
}

const data = new Date();
const diaDaSemana = data.getDay();
const diaDaSemanaTexto = getDayWeek(diaDaSemana);
// diaDaSemana = 7;
console.log(diaDaSemanaTexto, `${data}`);

//mesma coisa do if else(usando quando é apenas a mesma condiçao)
/* switch(diaDaSemana) {
    case 0:
        diaDaSemanaTexto = 'Domingo';
    break;
}
switch(diaDaSemana) {
    case 1:
        diaDaSemanaTexto = 'Segunda';
    break;
}
switch(diaDaSemana) {
    case 2:
        diaDaSemanaTexto = 'Terça';
    break;
}
switch(diaDaSemana) {
    case 3:
        diaDaSemanaTexto = 'Quarta';
    break;
}
switch(diaDaSemana) {
    case 4:
        diaDaSemanaTexto = 'Quinta';
    break;
}
switch(diaDaSemana) {
    case 5:
        diaDaSemanaTexto = 'Sexta';
    break;
}
switch(diaDaSemana) {
    case 6:
        diaDaSemanaTexto = 'Sabadão';
    break;
    default :
        diaDaSemanaTexto = '';
    
} */
