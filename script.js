const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const name = form.querySelector('input[type="text"]').value
    const email = form.querySelector('input[type="email"]').value
    const message = form.querySelector('textarea').value

    console.log(`Форма отправлена правильно. Имя: ${name}, Email: ${email}, Сообщение: ${message}`)
})