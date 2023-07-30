function calcular() {
    
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#peso').value);
    let res = document.querySelector('.resultado')
 
    
    let imc = peso / (altura ** 2)
    res.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
}