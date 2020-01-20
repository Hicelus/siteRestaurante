var nome = document.getElementById("tNome");
var endereco = document.getElementById("tEndereco");
var mensagem = document.getElementById("instrucao");

//seleção de campo
nome.onfocus = function(){instruir(1)};
endereco.onfocus = function(){instruir(2)};

function instruir(opcao){
    if(opcao == 1 ){
        mensagem.innerHTML = "PEDIDO: Insira seu nome:";
    }
    else if(opcao == 2){
        mensagem.innerHTML = "PEDIDO: Insira seu endereço:";
    }
}