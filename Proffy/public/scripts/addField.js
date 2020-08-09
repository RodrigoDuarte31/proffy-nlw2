/* Script para procurar o evento de clique no botão '+ Novo Horário',
adicionando (duplicando) os campos do formulário no HTML */

document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField () {
    // Pegando os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // A const irá receber o componente '.schedule-item' com seus componentes internos 
    
    // Limpar os campos (inputs dos horários)
    const fields = newFieldContainer.querySelectorAll('input') // A const fields irá receber uma lista dos inputs presentes dentro da const newFieldContainer
    fields.forEach(function(field) {
        field.value = ''
    })
    
    // Adicionando como componentes filhos de '#schedule-items' o novo campo de formulário com os horários limpos
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}