# SLCChallenge

Projeto angular versão 12.2.3.

Consome api do github e apresenta em um site.

Um exemplo hospedado se encontra em: https://slc-challenge-kalel.herokuapp.com/

## Requisitos
node 12.14.0

npm 6.4.1


## Iniciar aplicação

Necessário gerar um token para autenticação na api do github ver em (https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication).

Adicionar o token gerado no arquivo enviroment.prod.ts e enviroment.ts.

Editar o arquivo .env encontrado na raiz e alterar para uma porta disponivel onde irá rodar o node server.

Acessar a pasta SLCChallenge

Executar os comandos
```
npm install
npm run postInstall
npm run start
```

## Para desenvolvimento
Cumprir os requisitos acima

Executar o comando
```
ng serve --open
```
