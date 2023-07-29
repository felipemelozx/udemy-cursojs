function check(){
    let name = document.querySelector('#iname').value;
    let sobrenome = document.querySelector('#iSobreNome').value;
    let peso = document.querySelector('#ipeso').value;
    let altura = document.querySelector('#ialtura').value;
    let resu = document.querySelector('.res')

    let pessoa = {name, sobrenome, peso, altura,}
    
    let array = [''];
    
    array = (pessoa);
    
    console.log(array)
    resu.innerHTML += `<p>Nome: ${pessoa.name} Sobrenome: ${pessoa.sobrenome}Peso: ${pessoa.peso}Altura: ${pessoa.altura}</p>`

}