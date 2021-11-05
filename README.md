<h3 align="center">
  Api - Node.js com Sequelize
</h3>

<p align="center">Aplicação desenvolvida para criar listas de filmes com base em uma api externa chamada TMDB.
</p>

## 👾 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

## 💥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta do projeto;
3. Rode `npm install` para instalar as dependências;
4. Altere as credencias dentro de `/config/database.js`;
5. Rode `npx sequelize db:create` para criar o banco de dados;
6. Rode `npx sequelize db:migrate` para executar as migrations;
7. Rode `npm start` para iniciar o servidor.
8. Importe o [json](https://www.getpostman.com/collections/8642e16e368758d9fcca) desse repositório no postman;

OBS: Deixei um token(sei que é falha de sec rsrs) no .env-exemple que é necessário para acessar a api externa do tmdb, caso queira criar o seu próprio token basta acessar a [documentação](https://developers.themoviedb.org/3/getting-started/authentication) para saber mais.
## 🤓 Mer e Fluxo da aplicação
![Screenshot](/docs/fluxo.PNG)

![Screenshot](/docs/mer.PNG)
## 🧐 A fazer

- Criar frontend;
- Dockerizar aplicação;
- Melhorar tratamento de erros;
- Validação de requests;
- Criar testes;

