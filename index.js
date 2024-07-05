const { validarNota, validarFalta } = require('./utilidade');

const prompt = require('prompt-sync')();

let alunos = [];

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.materias = [];
    }
}

class Materia {
    constructor(nome, nota1, nota2, nota3, faltas) {
        this.nome = nome;
        this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
        this.nota3 = parseFloat(nota3);
        this.faltas = parseInt(faltas);
        this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
        // Aluno é reprovado se a média for menor que 7 ou se tiver mais de 5 faltas
        this.reprovado = this.media < 7 || this.faltas > 5 ? 'Sim' : 'Não';
    }
}

function cadastrarAluno() {
    nome = prompt('Digite o nome do aluno: ');
    // Verifica se o aluno já foi cadastrado
    if (alunos.find(a => a.nome === nome)) {
        console.log('Aluno já cadastrado!');
        return;
    }
    let aluno = new Aluno(nome);
    alunos.push(aluno);
    console.log('Aluno cadastrado com sucesso!');
    prompt('Cadastrar mais um aluno? (s/n)') === 's' ? cadastrarAluno() : null;
}

function cadastrarMaterias() {
    let aluno;
    do {
        let nomeAluno = prompt('Digite o nome do aluno para qual deseja cadastrar as materias: ');
        // verifica se o aluno existe
        aluno = alunos.find(a => a.nome === nomeAluno);
        if (!aluno) {
            console.log('Aluno não encontrado!');
        } 
    } while (!aluno);

    // Deve cadastrar no mínimo 3 matérias
    for (let i = aluno.materias.length; i <= 3; i++) {
        cadastrarMateria(aluno);
    }
    // Cadastro de matérias adicionais
    prompt('Cadastrar mais uma matéria? (s/n)') === 's' ? cadastrarMateria(aluno) : null;
}

function cadastrarMateria(aluno) {

    let nome = prompt('Digite o nome da matéria: ');
    // verifica se a materia já foi cadastrada
    if (!aluno.materias.find(m => m.nome === nome)) {

        let nota1 = validarNota('Digite a nota 1: ');
        let nota2 = validarNota('Digite a nota 2: ');
        let nota3 = validarNota('Digite a nota 3: ');
        let faltas = validarFalta('Digite a quantidade de faltas: ');
    
        let materia = new Materia(nome, nota1, nota2, nota3, faltas);
        aluno.materias.push(materia); 
    }
    else {
        console.log('Matéria já cadastrada!');
    }
}

function consultarAluno() {  
    let nomeAluno = prompt('Digite o nome do aluno que deseja consultar: ');
    let aluno = alunos.find(a => a.nome === nomeAluno);
    if (!aluno) {
        console.log('Aluno não encontrado!');
    } else {
        console.log('Aluno: ' + aluno.nome);
        console.log('Matérias: ');
        aluno.materias.forEach(m => {
            console.log('Matéria: ' + m.nome);
            console.log('Média: ' + m.media.toFixed(2));
            console.log('Faltas: ' + m.faltas);
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
            case "4":
                console.log('Saindo...');
                process.exit(1);
            default:
                console.log('Opção inválida!');
        }
    }
}

main();

