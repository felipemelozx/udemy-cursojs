const form = document.querySelector('.formulario')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputPeso = e.target.querySelector('#peso').value
    const inputAltura = e.target.querySelector('#altura').value

    const peso = Number(inputPeso)
    const altura = Number(inputAltura)
    if (!peso) {
        setResultado('Peso inválido. Insira um valor numérico maior que zero.', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida. Insira um valor numérico maior que zero.', false)
        return;
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNilveImc(imc)


    const msg = `Seu IMC e ${imc} (${nivelImc})`

    setResultado(msg, true)
})

function getNilveImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]

}
function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}
function criaP() {
    const p = document.createElement('p')
    return p
}
function setResultado(msg, isvalid) {
    const res = document.querySelector('.resultado')
    res.innerHTML = ''

    const p = criaP()
   
    if (true) {
        p.classList.add('resultado-correto')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    res.appendChild(p)
}