const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const name = form.querySelector('input[type="text"]').value
    const email = form.querySelector('input[type="email"]').value
    const message = form.querySelector('textarea').value

    console.log(`Форма отправлена правильно. \nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`)

    const confirmation = document.createElement('p')
    confirmation.textContent = 'Спасибо, ваше сообщение отправлено!'
    confirmation.style.color = 'red'
    confirmation.style.marginTop = '10px'
    confirmation.style.textAlign = 'center'

    form.append(confirmation)
})