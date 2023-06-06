document.addEventListener('DOMContentLoaded', function() {
    h1 = document.querySelector('.mudar')
    h1.innerHTML = localStorage.getItem('regra')
})