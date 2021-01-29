const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tarefas = []

function mostraTarefas() {

    listElement.innerHTML = ''

    for (item of tarefas) {

        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)
        const linkElement = document.createElement('a')


        const linkText = document.createTextNode('X')
        linkElement.appendChild(linkText)
        linkElement.setAttribute('class', 'lucao')

        const posicaoItem = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `deletarTarefas(${posicaoItem})`)

        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)
        listElement.appendChild(itemList)
    }
}

mostraTarefas()

function addTerefa() {
    const tarefa = inputElement.value
    tarefas.push(tarefa)
    inputElement.value = ''
    mostraTarefas()
}

buttonElement.setAttribute('onclick', 'addTerefa()')

function deletarTarefas(posicaoItem) {
    tarefas.splice(posicaoItem, 1)
    mostraTarefas()
}