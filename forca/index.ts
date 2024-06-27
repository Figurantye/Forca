import * as Promt from 'prompt-sync';
import { Words } from './Words';

function forca() {
    const prompt = Promt();
    let palavra: string = ''
    let caralho = new Words()
    const arrPalavra: string[] = []
    const arrComparacao: string[] = []
    let pergunta: string = ""
    let io: boolean = true;
    let tentativas: number = 5;


    while (io) {
        console.log("ESOLHA A DIFICULDADE: \nfacil \nnormal");
        pergunta = prompt('dificil: ')
        switch (pergunta) {
            case "facil":
                palavra = new Words().easyWords[Math.floor(Math.random() * (caralho.easyWords.length - 0) + 0)]
                io = false
                break;
            case "normal":
                palavra = new Words().normalWords[Math.floor(Math.random() * (caralho.normalWords.length - 0) + 0)]
                io = false
                break;
            case "dificil":
                palavra = new Words().hardWords[Math.floor(Math.random() * (caralho.hardWords.length - 0) + 0)]
                io = false
                break;
            default:
                console.log('opcao invalida!');
                break;
        }
    }
    io = true

    while (arrPalavra.length < palavra.length) {
        arrPalavra.push("")
        arrComparacao.push("")
    }

    console.log("JOGO DA FORCA!");
    for (let index = 0; io == true; index++) {
        if (arrPalavra.every((elem) => elem != "")) {
            console.log(`ACERTOU! A arrPalavra é ${palavra}`);
            io = false
        } else {
            pergunta = prompt("Adivinhe a letra: ")
        }
        for (let i2 = 0; i2 < palavra.length; i2++) {
            if (pergunta.toLowerCase() == palavra[i2]) {
                arrPalavra.splice(i2, 1, pergunta);
            }
        }
        if (JSON.stringify(arrPalavra) == JSON.stringify(arrComparacao)) {
            tentativas -= 1
        } else {
            for (let i2 = 0; i2 < arrComparacao.length; i2++) {
                if (pergunta.toLowerCase() == palavra[i2]) {
                    arrComparacao.splice(i2, 1, pergunta);
                }
            }
        }
        console.log(arrPalavra);
        console.log(`tentativas restantes: ${tentativas}`);

        if (tentativas == 0) {
            "Game Over"
            io = false
        }
    }

    console.log(palavra);
    
}

forca();
