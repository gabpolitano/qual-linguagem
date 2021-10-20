let usuario = prompt("Como você se chama?");

alert("\nSeja bem vindo, " + usuario + "\n\nContinue para você tentar acertar qual é essa linguagem de programação!");

let linguagem = prompt("Digite um dos números tentar acertar qual é essa linguagem!!\n Digite 1 para JavaScript:\n Digite 2 para PHP:\n Digite 3 para Python:\n Digite 4 para Java")

function respostaLinguagem() {
    if (linguagem == 1 || linguagem == 2 || linguagem == 4) {
        alert("\nPUTS, VOCÊ ERROU!");
    } else if (linguagem == 3) {
        alert("\nUHUUU, VOCÊ ACERTOU!");
    }
}

let resposta = respostaLinguagem();

let tentativa = prompt("Quer tentar mais uma vez?")
let segundaTentativa = prompt("Digite um dos números tentar acertar qual é essa linguagem!!\n Digite 1 para JavaScript:\n Digite 2 para PHP:\n Digite 3 para Python:\n Digite 4 para Java")

function novaTentativa() {
    if (tentativa == "Sim" || tentativa == "sim") {
        if (segundaTentativa == 1 || segundaTentativa == 2 || segundaTentativa == 4) {
            alert("\nPUTS, VOCÊ ERROU!");
        } else if (segundaTentativa == 3) {
            alert("\nUHUUU, VOCÊ ACERTOU!");
        }
    } else if (tentativa == "Não" || tentativa == "não" || tentativa == "Nao" || tentativa == "nao") {
        alert("\nObrigado por jogar!!");
    }
}

novaTentativa();