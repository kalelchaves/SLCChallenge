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

![image](https://user-images.githubusercontent.com/4333644/131348330-06f68964-8087-4c25-acf3-0d1fabdea2c6.png)

![image](https://user-images.githubusercontent.com/4333644/131348393-d2f453b3-5616-4d00-8dc5-959e2eaaeba3.png)


Editar o arquivo .env encontrado na raiz e alterar para uma porta disponivel onde irá rodar o node server.

![image](https://user-images.githubusercontent.com/4333644/131348235-21814830-2b23-4891-934c-9cd30c253993.png)


Acessar a pasta SLCChallenge

Executar os comandos
```
npm install
npm run start
```

## Para desenvolvimento
Cumprir os requisitos acima

Executar o comando
```
ng serve --open
```
