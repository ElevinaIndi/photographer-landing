function confirmation() {
    const p = document.createElement('p')
    p.textContent = 'Спасибо, ваше сообщение отправлено!'
    p.style.color = 'red'
    p.style.marginTop = '10px'
    p.style.textAlign = 'center'
    form.append(p)
}


const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const name = form.querySelector('input[type="text"]').value
    const email = form.querySelector('input[type="email"]').value
    const message = form.querySelector('textarea').value

    console.log(`Форма отправлена правильно. \nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`)

    confirmation()

    
})