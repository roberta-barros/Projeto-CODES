document.addEventListener('DOMContentLoaded', function() {
    h1 = document.querySelector('.mudar')
    h1.innerHTML = localStorage.getItem('opcao')
})


document.addEventListener('DOMContentLoaded', function() {
    podes = document.querySelectorAll('.pode')
    podes.forEach(function(pode) {
        pode.addEventListener('click', function(event) {
            nav = pode.nextElementSibling;
            if (nav && nav.tagName === 'NAV') {
                ul = nav.querySelector('ul')
                lis = ul.querySelectorAll('li')

                lis.forEach(function(li) {
                    if (li.classList.contains('hidden')) {
                        li.classList.remove('hidden')
                        li.classList.add('qual')
                    } else {
                        li.classList.add('hidden')
                        li.classList.remove('qual')
                    }
                })
            }
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    semanas = document.querySelectorAll('.semana li')
    dias = document.querySelectorAll('.dia li')

    semanas.forEach(function(semana, semanaIndex) {
        semana.addEventListener('click', function(event) {
            dias.forEach(function(dia, diaIndex) {
                dia.addEventListener('click', function(event) {
                    Dia = dia.textContent
                    Semana = semana.textContent
                    localStorage.setItem('Dia', Dia)
                    localStorage.setItem('Semana', Semana)
                    window.location.href = 'Selecao_horario.html'
                })
            })
        })
    })
})






