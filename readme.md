# Sistema de Cadastro de Alunos e Matérias

Este projeto é um sistema de cadastro de alunos e suas respectivas matérias, desenvolvido em Node.js. O sistema permite cadastrar alunos, associar matérias aos alunos e consultar informações sobre os alunos e suas matérias.

## Arquivos do Projeto

- `index.js`: Arquivo principal que contém a lógica do programa.
- `utilidade.js`: Arquivo que contém funções de utilidade, como a validação de notas e faltas.

## Funcionalidades

### Cadastro de Alunos

Permite cadastrar novos alunos no sistema. Se um aluno com o mesmo nome já estiver cadastrado, o sistema exibirá uma mensagem de erro.

### Cadastro de Matérias

Permite cadastrar matérias para alunos específicos. Cada matéria inclui notas e número de faltas. O aluno é reprovado se a média das notas for menor que 7 ou se tiver mais de 5 faltas.

### Consulta de Alunos

Permite consultar informações sobre um aluno específico, incluindo as matérias associadas, médias das notas, número de faltas e status de aprovação/reprovação.

## Como Usar

### Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/BrunoCoelho98/SistemaGestaoDeNotas.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd SistemaGestaoDeNotas
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

### Executando o Programa

Para executar o programa, use o seguinte comando:
```sh
node index.js
