const "caixaPrincipal" = document.querySelector(".caixa-principal");
const "caixaPerguntas" = document.querySelector(".caixa-perguntas");
const "caixaAlternativas" = document.querySelector(".caixa-alternativas");
const "caixaResultados" = document.querySelector(".caixa-resultados");
const "textoResultado" = document.querySelector(".textoResultado");

const perguntas - [
    {
        enunciado: "Pergunta1",
        alternativas:[
            "alternativa1","alternativa2"
        ]
    }
    {
        enunciado: "Pergunta2",
        alternativas:[
            "alternativa1","alternativa2"       
    }
    {
        enunciado: "Pergunta1",
        alternativas:[
            "alternativa1","alternativa2"
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    for(const alternativa of perguntaAtual.alternativas) { 
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas); 
   
    mostraAlternativas();
}
}

function mostraAlternativas(){

}
mostraPergunta();
