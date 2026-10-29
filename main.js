// REFERÊNCIA PARA O INPUT DA TELA (DISPLAY)
const tela = document.getElementById("tela")
// getElementById() procura um elemento HTML pelo seu ID



// FUNÇÃO PARA ADD OS VALORES NA TELA

// CRIANDO UMA FUNÇÃO - NOMES RESERVADOS
// PARÂMETROS - REGRA DA MINHA FUNÇÃO 
// alert()
// if (comparação)
// {o que a minha função ira fazer}
function adicionarValor(valor){
    tela.value += valor;

// tela.value acessa o conteúdo do campo calculadora
// O operador += adiciona o novo valor ao conteudo que já existe
}


// Função para limpar toda a tela
function limparTela(){
    tela.value = "";
// Criamos uma string vazia, que ira subistituir o conteúdo que esta na tela
}


// Função para apagar o ultimo caractere
function apagarUltimo(){
// Remove o ultimo caractere inserido na tela
    tela.value = tela.value.slice(0,-1);
// O metodo slice permite extrair uma parte de uma string
}


// função para calcular o resultado  
function calcularResultado(){
// O try permite executar um codigo que pode gerar um erro
    try{
        // O eval() interpreta uma string como uma expressão javascript
        //calcula a operação
        // o resultado calculado substitui o conteúdo da tela
        tela.value = eval(tela.value);
    }
    catch(erro){
        tela.value = "Erro";
    }
}

//ADICIONAR EVENTOS

document.addEventListener("keydown", function(evento) {
    const tecla = evento.key;

    if ("0123456789/*-+.".includes(tecla)){
        adicionarValor(tecla);
    }

    if (tecla === "Enter" || tecla === "="){
        calcularResultado();
    }

    if (tecla === "Backspace"){
        apagarUltimo();
    }

    if (tecla === "Escape"){
        limparTela();
    }

})








