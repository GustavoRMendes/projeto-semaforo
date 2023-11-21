let vermelho = document.getElementById('vermelho');
let amarelo = document.getElementById('amarelo');
let verde = document.getElementById('verde');
let imagem = document.getElementById('semaforo');

function fechar(){
    imagem.src = 'img/vermelho.png';
}
function amarelar(){
    imagem.src = 'img/amarelo.png';
}
function abrir(){
    imagem.src = 'img/verde.png';
}