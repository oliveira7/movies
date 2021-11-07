<h3 align="center">
  Api - Node.js com MySQL
</h3>

<p align="center">Aplicação desenvolvida para criar listas de filmes com base em uma api externa chamada TMDB.
</p>

## 👾 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js
- 🐳 Docker — Build safer, share wider, run faster

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/desktop/windows/install/)
## 💥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta do projeto;
3. Renomeie o .env-example para .env;
4. Rode `docker-compose up -d` para subir os containers;
5. Importe o [json](https://www.getpostman.com/collections/8642e16e368758d9fcca) desse repositório no postman;

OBS: Deixei os dados(não é seguro mas é para fins de teste) no .env para que o teste fiquei mais fácil, caso contrário teria que cria um access token [TMDB](https://developers.themoviedb.org/3/getting-started/authentication). E como a aplicação está dockerizada, não é necessário trocar as váriaveis de banco.
## 🤓 Mer/Fluxo da aplicação

![Screenshot](/docs/fluxo.PNG)

![Screenshot](/docs/mer.PNG)
## 🧐 A fazer

- [ ] Criar frontend;
- [x] Dockerizar aplicação;
- [x] Melhorar tratamento de erros;
- [ ] Criar testes;
- [ ] Criar Swagger;
