const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Qual é a principal causa do aquecimento global?",
        alternativas: [
            {
            texto: "a) Queima de combustíveis fósseis",
            afirmacao: "afirmacao"
            },
            {
            texto:"b) Uso excessivo de energia solar",
            afirmacao: "afirmacao"
            },
            {
            texto:"c) Desmatamento indiscriminado",
            afirmacao: "afirmacao"
        }
    ]
    },

    {
        enunciado: "2) Quais são alguns dos impactos das inundações?",
        alternativas: [
            {
            texto:"a) Destruição de propriedades",
            afirmacao: "afirmacao"
            },
            {
            texto: "b) Aumento da biodiversidade",
            afirmacao: "afirmacao"
            },
            { texto:"c) Diminuição da erosão do solo",
                arfirmacao: "afirmacao"
            }
        ]
           
    },
    {
        enunciado: "3) Quais são algumas das consequências do desmatamento?",
        alternativas: [
            {
            texto:"a) Perda de biodiversidade",
            afirmacao: "afirmacao"
        },
         {   
            texto: "b) Diminuição das emissões de carbono",
            afirmacao: "afirmacao"
         },
         {
          texto: "c) Melhoria na qualidade do solo",
          afirmacao: "afirmacao"
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas=textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal = afirmacoes;
            atual++;
            mostraPergunta();
    }

    
    mostraPergunta();

    