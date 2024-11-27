const ask = require('readline-sync');

function main() {
    while (true) {
        console.log(`
[1] - Somar
[2] - Subtrair
[3] - Multiplicar
[4] - Dividir
[5] - Sair
        `);

        const opcao = ask.questionInt("Escolha uma opcao: ");

        if (opcao === 5) {
            console.log("Encerrando o programa...");
            break;
        }

        console.log("Opcao escolhida:", opcao);
    }
}

main();
