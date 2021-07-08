# Back-end

# instalação

1. instale o node e o npm https://nodejs.org/en/

2. baixe o projeto e rode o comando: npm install

3. Configure a arquivo .env

4. Para rodar o servidor use : npm start 

O servidor já está rodando no google cloud () para ser consumido pelo front-end.

# Explicando o projeto 

Inicialmente criei uma aplicação com autentificação JWT que esta comentada no arquivo 
`./src/routes/apis.js`. Esse é o arquivo que fica o caminho de cada api e ele redireciona para o `./src/app/controllers`. Essa pasta fica os controladores neles são feitas as regas de negocio de cada api acessada. Utilizei o `MongoDB` com banco a sua conexão e feita no arquivo `./src/databases/mongoDB.js`. Os modais que são onde as colunas são criadas e configuradas fica na pasta `./src/app/models` cada aquivo representa uma tabela diferente no banco. A pasta `./src/app/middleware` fica os arquivos de autentificação que estão desabilitados. A aquivo `./src/server.js` conecta tudo isso e da inicio ao servidor. 





