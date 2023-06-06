document.addEventListener('DOMContentLoaded', function() {
    function after() {
        clicar.classList.add('hidden')

        qrcode = document.querySelector('.qrcode')
        qrcode.classList.remove('hidden')

        chave = document.querySelector('.chave')
        chave.classList.remove('hidden')

        comprovação = document.querySelector('.comprovação')
        comprovação.classList.remove('hidden')
    }

    clicar = document.querySelector('.clicar')

    clicar.addEventListener('click', function() {
        after()
    })
})

document.addEventListener('DOMContentLoaded', function() {
    function after() {
        depois = document.querySelector('h1')
        main = document.querySelector('main')
        ul = main.querySelector('ul')
        ul.classList.add('hidden')

        h5 = document.createElement('h5')
        depois.insertAdjacentElement('afterend', h5)
        h5.innerHTML = 'Pagamento realizado com sucesso!'
        h5.style.fontSize = '1.5rem'
    }

    comprovação = document.querySelector('.comprovação')

    comprovação.addEventListener('click', function() {
        after()
    })
})
