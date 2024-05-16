const submitBtn = document.querySelector('#submit-btn')
const name_ = document.querySelector('#name')
const subject = document.querySelector('#subject')
const contact = document.querySelector('#tel')
const message = document.querySelector('#message')

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    formContent = new Checks(name_, subject, contact, message)
    formContent.checkName()
    formContent.checkSubject()
    formContent.checkContact()
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
            return
        }
    }

    checkSubject(){
        if(this.subject.value.length < 4) {
            addAlert(this.subject, 'O assunto precisa ter, no mínimo, 4 caracteres.')
            return
        }
    }

    checkContact(){
        if(Number(this.contact.value) === NaN) {
            addAlert(this.contact, 'O campo contato aceita apenas números.')
            return
        }
    }
}

function addAlert(element, msg){
    const alert = document.createElement('div')
    alert.innerText = msg
    alert.classList.add('form-alert')
    element.parentElement.appendChild(alert)
}