/* could not get it to work using javascript! 

const fullname = document.getElementsByClassName('fullname')
const email = document.getElementsByClassName('email')
const subject = document.getElementsByClassName('subject')
const msg = document.getElementsByClassName('msg')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (fullname.length <=4) {
        messages.push ('Give Us Your Full Name Please')
    }

    if (msg.value.length <=20) {
        messages.push ('Message must be longer than 20 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
*/
