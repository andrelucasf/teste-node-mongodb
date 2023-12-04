# Teste Técnico Node.js + MongoDB

Este projeto foi desenvolvido como parte de um teste técnico para uma empresa, que solicitou a implementação de uma aplicação Node.js utilizando Express, Mongoose e Jest para testes.

## Descrição do Projeto

O objetivo deste teste técnico é criar uma aplicação básica para gerenciar produtos. A aplicação deve ser capaz de realizar operações CRUD (Criar, Ler, Atualizar e Deletar) para a entidade "Produto" no banco de dados MongoDB.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução para JavaScript no lado do servidor.
- Express: Framework web para Node.js, utilizado para criar a API.
- Mongoose: Utilizado para modelar e interagir com os dados do banco de dados.
- MongoDB: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.
- Jest: Framework de teste para JavaScript, utilizado para testes automatizados.

## Estrutura do Projeto

O projeto está organizado em pastas que representam diferentes aspectos da aplicação:

- `src`: Contém o código-fonte da aplicação.
  - `controllers`: Lógica de controle da aplicação.
  - `models`: Definição dos modelos de dados utilizando o Mongoose.
  - `routes`: Configuração das rotas da API.
  - `useCases`: Lógica de casos de uso da aplicação.
  - `validations`: Validadores usando a biblioteca `celebrate` e esquemas Swagger gerados a partir de Joi.
  - `tests`: Contém os testes automatizados usando Jest.
- `scripts`: Scripts úteis para execução do projeto.

## Decisões de Design

Durante o desenvolvimento, algumas decisões de design foram tomadas:

1. **Estrutura MVC**: A aplicação segue uma arquitetura Model-View-Controller (MVC) para organizar o código e separar as responsabilidades.
2. **Use Cases**: A lógica de negócios foi separada em "Use Cases" para manter a coesão e facilitar a testabilidade.
3. **Validação e Documentação**: Utilização da biblioteca `celebrate` para validação de dados e geração de esquemas Swagger para documentação da API.
4. **Testes Automatizados**: Utilização do Jest para criar testes automatizados, garantindo a qualidade do código.
5. **Divisão de Rotas e Controladores**: Rotas e lógica de controle foram separadas para facilitar a manutenção e escala da aplicação.

## Como Executar o Projeto

Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina. Em seguida, siga os passos abaixo:

1. Clone o repositório: `git clone https://github.com/andrelucasf/teste-node-mongodb.git`
2. Acesse o diretório do projeto: `cd teste-node-mongodb`
3. Instale as dependências: `npm install`
4. Execute o servidor: `npm start`
5. Acesse a API em `http://localhost:3000/api/products`

## Como Executar os Testes

Para executar os testes automatizados, utilize o seguinte comando:

```bash
npm test
```

Isso iniciará a execução dos testes definidos na pasta `tests` utilizando o Jest.

## Documentação da API

A documentação da API, gerada automaticamente a partir dos esquemas Swagger, está disponível em `http://localhost:3000/api/docs/`.

Este projeto é uma implementação simples que atende aos requisitos do teste técnico. Qualquer sugestão ou melhoria é bem-vinda!
