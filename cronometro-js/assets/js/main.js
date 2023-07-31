function secHora(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'GMT'
    })
}
let time = document.querySelector('p')
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')
let timer;
let segundos = 0;
function iniciarRelogio() {
     timer = setInterval(function () {
        segundos++
        time.innerHTML = secHora(segundos)
    }, 1000)
}
iniciar.addEventListener('click', function (event) {
    clearInterval(timer)
    iniciarRelogio()
    time.classList.remove('pausado')
})
pausar.addEventListener('click', function (event) {
 clearTimeout(timer)
 time.classList.add('pausado')
})
zerar.addEventListener('click', function (event) {
    clearTimeout(timer)
    time.innerHTML = '00:00:00'
    segundos = 0
    time.classList.remove('pausado')
})

