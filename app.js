alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()  * numeroMaximo + 1);
let numeroMaximo = 5000;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

// enquanto chute não for igual
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    tentativas++;

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) { 
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}