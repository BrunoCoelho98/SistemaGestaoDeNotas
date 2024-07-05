const prompt = require('prompt-sync')();


// Recebe a nota do aluno e valida se é um número entre 0 e 10
function validarNota(promptText) {
    let valido = false;
    let numero;

    while (!valido) {
        const input = prompt(promptText);
        numero = parseFloat(input);

        // Deve ser um número entre 0 e 10
        if (!isNaN(numero) && numero >= 0 && numero <= 10) {
            valido = true;
        } else {
            console.log('Por favor, insira um número entre 0 e 10.');
        }
    }

    return numero;
}

// Recebe o número de faltas do aluno e valida se é um número inteiro positivo
function validarFalta(promptText) {
    let valido = false;
    let numero;

    while (!valido) {
        const input = prompt(promptText);
        numero = parseFloat(input);

        // Deve ser um número inteiro positivo
        if (!isNaN(numero) && numero >= 0 && Number.isInteger(numero)) {
            valido = true;
        } else {
            console.log('Por favor, insira um número inteiro positivo.');
        }
    }

    return numero;
}

module.exports = { validarNota, validarFalta};
