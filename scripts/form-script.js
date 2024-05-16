const form = document.querySelector('form')
const name_ = document.querySelector('#name')
const subject = document.querySelector('#subject')
const contact = document.querySelector('#tel')
const message = document.querySelector('#message')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    formContent = new Checks(name_, subject, contact, message)
    const checkList = [formContent.checkName(), formContent.checkSubject(), formContent.checkContact()]
    if(!checkList.includes(false)) {
        form.reset()
        spanList = form.getElementsByClassName('form-alert')
        while (spanList.length - 1 >= 0){
            spanList[0].remove()
        }
        alert('Formulário enviado com sucesso!')
    }
})

class Checks{
    constructor(name, subject, contact, message) {
        this.name = name,
        this.subject = subject,
        this.contact = contact,
        this.message = message
    }

    checkName(){
        if(this.name.value.length < 3) {
            addAlert(this.name, 'O nome precisa ter, no mínimo, 3 caracteres.')
            return false
        }
        return true
    }

    checkSubject(){
        if(this.subject.value.length < 4) {
            addAlert(this.subject, 'O assunto precisa ter, no mínimo, 4 caracteres.')
            return false
        }
        return true
    }

    checkContact(){
        if(Number(this.contact.value) === NaN) {
            addAlert(this.contact, 'O campo contato aceita apenas números.')
            return false
        }
        return true
    }
}

function addAlert(element, msg){
    const alert = document.createElement('div')
    alert.innerText = msg
    alert.classList.add('form-alert')
    element.parentElement.appendChild(alert)
}