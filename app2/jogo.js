var altura = 0;
var largura = 0;

function obterTamanhoTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log('Largura: ' + largura);
    console.log('Altura: ' + altura);
}

obterTamanhoTela();

function posicaoRandomica(){

    //remover a mosca anterior caso exista
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX; //caso a posicao seja menor que 0 ele recebe o valor 0, se nao recebe ele mesmo
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
    console.log(posicaoX, posicaoY);
    
    //criar elemento html
    
    var mosca = document.createElement('img'); //cria um novo elemento html e o atribui a uma variavel
    mosca.src = './imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio(); //retorna um tamanho aleatorio a mosca/-/temos que dar espaço apos a string para ela n se juntar com outras
    mosca.style.position = 'absolute' //define a posicao como absoluta para que os valores de margem sejam aplicados
    mosca.style.left = posicaoX + 'pX'; //posicao em relação a margem esquerda
    mosca.style.top = posicaoY + 'pX'; //posicao em relação a margem top
    mosca.id = 'mosca'
    
    document.body.appendChild(mosca); //coloca o novo elemento atribuido a uma variavel dentro do body, se fosse o head teria que ser document.head.appendChild(mosca); e assim por diante

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3); //usmaos 3 pois assim ele pode ser arredondado pra 2

    switch(classe){
        case 0:
            return 'mosquito1'; //n usamos o break pois o return ja para a função quando é lido
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }

}
