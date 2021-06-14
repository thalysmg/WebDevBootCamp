let maximum = parseInt(prompt("Digite o número máximo"));

while (!maximum) {
    maximum = parseInt(prompt("Digite um número válido"))
}

let secretNumber = parseInt(Math.random() * maximum) + 1;
let guess;
let tries = 0;

let lastDifference = 0;

let msg = "Digite um número qualquer";

do {
    guess = parseInt(prompt(msg));
    tries++;

    if (Math.abs(guess - secretNumber) < lastDifference) {
        msg = "Tá esquentando...";
    } else {
        msg = "Tá friooo :(";
    }

    lastDifference = Math.abs(guess - secretNumber);

} while (guess !== secretNumber);

alert(`Você acertou!! \nNúmero de tentativas: ${tries}`);
