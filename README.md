
# Cypress QA Practice

Projeto prático de estudos em Quality Assurance (QA), com foco em automação de testes End-to-End (E2E) utilizando Cypress e JavaScript.

## Objetivo

Desenvolver e praticar testes automatizados para validar funcionalidades de uma aplicação web, aplicando conceitos de testes positivos, negativos e validação de resultados esperados.

## Funcionalidades testadas

### 1. Login
- Login com credenciais válidas.
- Tentativa de login com senha incorreta.
- Tentativa de login com campos vazios.
- Verificação de mensagens de erro.
- Validação do redirecionamento após login.

### 2. Carrinho de compras
- Adição de produtos ao carrinho.
- Verificação da quantidade de produtos adicionados.
- Validação dos produtos exibidos no carrinho.

## Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- npm

## Estrutura do projeto

```text
cypress-qa-practice/
├── cypress/
│   └── e2e/
│       ├── login.cy.js
│       └── carrinho.cy.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto

```bash
cd cypress-qa-practice
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Abrir o Cypress

```bash
npx cypress open
```

Ou executar os testes diretamente pelo terminal:

```bash
npx cypress run
```

## Aplicação utilizada

[ SauceDemo ](https://www.saucedemo.com/)

Aplicação de demonstração utilizada para praticar automação de testes.

## Sobre o projeto

Este projeto foi desenvolvido para fins de aprendizado e prática de conceitos de QA, incluindo criação de casos de teste, validação de comportamentos, identificação de falhas e automação de testes web.
