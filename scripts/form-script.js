const form = document.querySelector('form')
const resetBtn = document.querySelector('#reset-btn')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    formContent = new Checks()
    const checkList = [formContent.checkName(), formContent.checkSubject(), formContent.checkContact()]
    if(!checkList.includes(false)) {
        form.submit()
        form.reset() 
        alert('Formulário enviado com sucesso!')
    }
})

resetBtn.addEventListener('click', (event) => {
    delAlert('#name-span')
    delAlert('#subject-span')
    delAlert('#contact-span')
})

class Checks{
    constructor() {
        this.name = document.querySelector('#name'),
        this.subject = document.querySelector('#subject'),
        this.contact = document.querySelector('#tel'),
        this.message = document.querySelector('#message')
    }

    checkName(){
        delAlert('#name-span')
        if(this.name.value.length < 3) {
            addAlert(this.name, 'O nome deve ter, ao mínimo, 3 caracteres.')
            return false
        } else if(/\d/.test((this.name.value))) {
            addAlert(this.name, 'O campo nome aceita apenas caracteres alfabéticos.')
            return false
        }
        return true
    }

    checkSubject(){
        delAlert('#subject-span')
        console.log(this.subject.value.length < 4)
        if(this.subject.value.length < 4) {
            addAlert(this.subject, 'O assunto deve ter, ao mínimo, 4 caracteres.')
            return false
        } else if(/\d/.test((this.subject.value))) {
            addAlert(this.subject, 'O campo assunto aceita apenas caracteres alfabéticos.')
            return false
        }
        return true
    }

    checkContact(){
        delAlert('#contact-span')
        if(isNaN(Number(this.contact.value))) {
            addAlert(this.contact, 'O campo contato aceita apenas números.')
            return false
        } else if(this.contact.value.length < 8) {
            addAlert(this.contact, 'O campo deve ter, ao mínimo, 8 dígitos.')
            return false
        }
        return true
    }
}

function addAlert(element, msg){
    const alert = document.createElement('div')
    alert.innerText = msg
    alert.classList.add('form-alert')
    element.parentElement.insertAdjacentElement('beforebegin', alert)
}

function delAlert(spanName){
    const span = document.querySelector(spanName)
    const alert = span.previousElementSibling
    if (alert) {
        if (alert.classList.contains('form-alert')) {
            alert.remove()
        }
    }
}