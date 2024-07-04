const prompt = require('prompt-sync')();

let alunos = [];

class aluno {
    nome;

    constructor(nome) {
        this.nome = nome;
    }

    materias = [];
}

class materia {

    constructor(nome, nota1, nota2, nota3, faltas) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.faltas = faltas;
    }

    media = (this.nota1 + this.nota2 + this.nota3) / 3;
    reprovado = this.media < 7 || this.faltas > 5;

}

function cadastrarAluno() {
    aluno.nome = prompt('Digite o nome do aluno: ');
    alunos.push(aluno);
    console.log('Aluno cadastrado com sucesso!');
}

function cadastrarMaterias() {
    do {
        let nomeAluno = prompt('Digite o nome do aluno para qual deseja cadastrar as materias: ');
        // verifica se o aluno existe
        aluno = alunos.find(a => a.nome === nomeAluno);
        if (!aluno) {
            console.log('Aluno não encontrado!');
        } 
    } while (!aluno);

    // Deve cadastrar no mínimo 3 matérias
    for (let i = 0; i < 3; i++) {
        cadastrarMateria(aluno);
    }
    var nova = true;
    while (nova) {
        nova = prompt('Deseja cadastrar mais uma matéria? (s/n)') === 's';
        if (nova) {
            cadastrarMateria(aluno);
        }
    }
}

function cadastrarMateria(aluno) {

    let nome = prompt('Digite o nome da matéria: ');
    let nota1 = prompt('Digite a nota 1: ');
    let nota2 = prompt('Digite a nota 2: ');
    let nota3 = prompt('Digite a nota 3: ');
    let faltas = prompt('Digite a quantidade de faltas: ');

    let materiaCadastrada = new materia(nome, nota1, nota2, nota3, faltas);
    aluno.materias.push(materiaCadastrada);
}

function consultarAluno() {  
    let nomeAluno = prompt('Digite o nome do aluno que deseja consultar: ');
    aluno = alunos.find(a => a.nome === nomeAluno);
    if (!aluno) {
        console.log('Aluno não encontrado!');
    } else {
        console.log('Aluno: ' + aluno.nome);
        console.log('Matérias: ');
        aluno.materias.forEach(m => {
            console.log('Matéria: ' + m.nome);
            console.log('Nota 1: ' + m.nota1);
            console.log('Nota 2: ' + m.nota2);
            console.log('Nota 3: ' + m.nota3);
            console.log('Faltas: ' + m.faltas);
            console.log('Média: ' + m.media);
            console.log('Reprovado: ' + m.reprovado);
        });
    }
}  



function main() {
    let opcao = 0;
    while (opcao != 4) {
        console.log('1 - Cadastrar aluno');
        console.log('2 - Cadastrar matéria');
        console.log('3 - Consultar aluno');
        console.log('4 - Sair');
        opcao = prompt('Digite a opção desejada: ');

        switch (opcao) {
            case "1":
                cadastrarAluno();
                break;
            case "2":
                cadastrarMaterias();
                break;
            case "3":
                consultarAluno();
                break;
            case 4:
                console.log('Saindo...');
                exit(0);
                break;
            default:
                console.log('Opção inválida!');
        }
    }
}

main();