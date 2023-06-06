document.addEventListener('DOMContentLoaded', function() {
    h2s = document.querySelectorAll('h2')
  
    h2s.forEach(function(h2) {
      h2.addEventListener('click', function(event) {
        ul = event.target.nextElementSibling
  
        if (ul.classList.contains('hidden')) {
            ul.classList.remove('hidden')
        } else {
            ul.classList.add('hidden')
        }
      })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    input = document.getElementById('regra')
    botao = document.getElementById('botao')
    mensagem = document.getElementById('mensagem')

    palavras = ['louça', 'Louça', 'LOUÇA', 'louças', 'Louças', 'LOUÇAS','visitas', 'Visitas', 'VISITAS', 'visita', 'Visita', 'VISITA','banheiro', 'Banheiro', 'BANHEIRO', 'banheiros', 'Banheiros', 'BANHEIROS','silêncio', 'Silêncio', 'SILÊNCIO', 'silêncios', 'Silêncios', 'SILÊNCIOS']

    botao.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      var regra = input.value.trim()
      localStorage.setItem('regra', regra)

      if(palavras.includes(regra)){
      window.location.href = 'pesquisa.html'}
      else{
        mensagem.classList.remove('hidden')
        input.value = ''
        input.focus()
      }
    })
  })
  
