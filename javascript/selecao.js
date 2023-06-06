document.addEventListener('DOMContentLoaded', function() {
    dia = document.querySelector('.dia')
    dia.innerHTML = localStorage.getItem('Dia')
    semana = document.querySelector('.semana')
    semana.innerHTML = localStorage.getItem('Semana')
})

document.addEventListener('DOMContentLoaded', function() {
  escolhas = document.querySelectorAll('.escolheu')

  escolhas.forEach(function(escolha) {
    escolha.addEventListener('click', function(event) {
      pessoa = escolha.querySelector('.pessoa')

      if (pessoa) {
        if (pessoa.innerText === 'Carolina') {
          pessoa.remove()
        }
      } else {
        nomes = document.querySelectorAll('.pessoa')
        let nomeCarolinaPresente = false
        
        nomes.forEach(function(elemento) {
          if (elemento.innerText === 'Carolina') {
            nomeCarolinaPresente = true
          }
        })

        if (!nomeCarolinaPresente) {
          nome = document.createElement('p')
          nome.classList.add('pessoa')
          nome.innerText = 'Carolina'
          escolha.appendChild(nome)
        }
      }
    })
  })
})

  
  
  
  