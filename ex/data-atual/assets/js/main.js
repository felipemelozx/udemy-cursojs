let data = new Date()
let diaSemana = data.getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let h1 = document.querySelector('h1')
let nomedia;
let nomemes;

switch (diaSemana) {
    case 0:
        nomedia = "Domingo";
        break;
    case 1:
        nomedia = "Segunda-feira";
    case 2:
        nomedia = "Terça-feira";
        break;
    case 3:
        nomedia = "Quarta-feira";
        break;
    case 4:
        nomedia = "Quinta-feira";
        break;
    case 5:
        nomedia = "Sexta-feira";
        break;
    case 6:
        nomedia = "Sabado";

}
switch (mes) {
    case 0:
        nomemes = "Janeiro";
        break;
    case 1:
        nomemes = "Fevereiro";
        break;
    case 2:
        nomemes = "março";
        break;
    case 3:
        nomemes = "Abril";
        break;
    case 4:
        nomemes = "Maio";
        break;
    case 5:
        nomemes = "Junho";
        break;
    case 6:
        nomemes = "julho";
        break;
    case 7:
        nomemes = "Agosto";
        break;
    case 8:
        nomemes = "Setembro";
        break;
    case 9:
        nomemes = "Outubro";
        break;
    case 10:
        nomemes = "Novembro";
        break;
    case 11:
        nomemes = "Dezembro";
        break;
}
console.log(nomedia, dia, nomemes, ano, hora + ':' + min)

h1.innerHTML = `${nomedia}, ${dia} de ${nomemes} de ${ano} ${hora}:${min}`