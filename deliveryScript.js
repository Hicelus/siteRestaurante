var nome = document.getElementById("tNome");
var endereco = document.getElementById("tEndereco");
var mensagem = document.getElementById("instrucao");
var campo = document.getElementById("caixa");

//seleção de campo
nome.onfocus = function(){instruir(1)};
endereco.onfocus = function(){instruir(2)};

//mouse fora do campo
campo.onmouseout = function(){instruir(3)};


function instruir(opcao){
    switch(opcao){
        case 1: mensagem.innerHTML = "PEDIDO: Insira seu nome:"; break;
        case 2: mensagem.innerHTML = "PEDIDO: Insira seu Endereço:"; break;
        case 3: mensagem.innerHTML = "Pedido"; break;
    }
}