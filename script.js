const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Qual é a principal causa do aquecimento global?",
        alternativas: [
            "a) Queima de combustíveis fósseis",
            "b) Uso excessivo de energia solar",
            "c) Desmatamento indiscriminado"],
    },
    {
        enunciado: "2) Quais são alguns dos impactos das inundações?",
        alternativas: [
            "a) Destruição de propriedades",
            "b) Aumento da biodiversidade",
            "c) Diminuição da erosão do solo"],
    },
    {
        enunciado: "3) Quais são algumas das consequências do desmatamento?",
        alternativas: [
            "a) Perda de biodiversidade",
            "b) Diminuição das emissões de carbono",
            "c) Melhoria na qualidade do solo"],
    },
];


let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado
    mostraAlternativas();
} 
function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas)
        {const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativas;
            caixaAternativas.appendChild(botaoAlternativas);
        }
    }




mostraPergunta();