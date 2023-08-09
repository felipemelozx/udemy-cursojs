const inputTarefa = document.querySelector('#inputtarefas')
const btn = document.querySelector('#btn')
const task = document.querySelector('#task')

function criaLi() {
    const li = document.createElement('li');
    return li;
}
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTask(inputTarefa.value)
    }
})
function limpaTask() {
    inputTarefa.value = ''
    inputTarefa.focus()
}
function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'apagar'
    li.appendChild(botaoApagar)
    botaoApagar.setAttribute('class', 'apagar')
}
function criaTask(textInput) {
    const li = criaLi()
    li.innerHTML = textInput
    task.appendChild(li)
    limpaTask()
    criaBotaoApagar(li)
    salvarTask()
}
btn.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTask(inputTarefa.value)

})
document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
    salvarTask()
})

function salvarTask() {
    const liTasks = task.querySelectorAll('li')
    const listaDeTasks = []
    for (let task of liTasks){
        let taskText = task.innerHTML
        taskText = taskText.replace('apagar', ' ').trim()
        listaDeTasks.push(taskText)
    }
    const taskJSON = JSON.stringify(listaDeTasks)
    localStorage.setItem('tarefas', taskJSON)
}
function addTaskSalvas (){
    const task = localStorage.getItem('tarefas')
    const listaDeTask = JSON.parse(task)

    for (let task of listaDeTask){
        criaTask(task)
    }
}
addTaskSalvas ()