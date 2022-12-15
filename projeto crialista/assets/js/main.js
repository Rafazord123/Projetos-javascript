const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    li.innerText += ' ';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

function salvaTarefas () {
    const liTarefas  = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
    let    textoTarefa = tarefa.innerText;
    textoTarefa = textoTarefa.replace('Apagar', '').trim();
    listaDeTarefas.push(textoTarefa);
    }
// tranforma meu array em uma string e salva na memoria do site
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});


inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefas();
    }
})


function criaTarefa(textoInput) {
   const li = criaLi();
   li.innerText = textoInput;
   tarefas.appendChild(li);
   limpaInput();
   criaBotaoApagar(li);
   salvaTarefas();
}

function addTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();







