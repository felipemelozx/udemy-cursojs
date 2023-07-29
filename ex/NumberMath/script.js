var num = prompt('Enter a number!')
num = Number(num)

let titulo = document.querySelector('#numero-titulo')
titulo.innerHTML = num

let resultado = document.querySelector('#text')
let raiz = num ** 0.5
let aredondadoup = Math.ceil(num)
let aredondadodow = Math.floor(num)

resultado.innerHTML += `<p>A sua raiz quadrada e : <strong>${raiz}</strong></p> `
resultado.innerHTML += `<p>Seu numero e interiro ? : <strong>${Number.isInteger(num)}</strong> </p> `
resultado.innerHTML += `<p> E NaN: ${isNaN(num)}</p>`
resultado.innerHTML += `<p>Aredondado para cima: <strong>${aredondadoup}</strong> </p> `
resultado.innerHTML += `<p>Aredondado para Baixo: <strong>${aredondadodow}</strong> </p>`
resultado.innerHTML += `<p>com duas casas decimais: <strong>${num.toFixed(2)}</strong> </p>`
