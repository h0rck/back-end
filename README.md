# Back-end

## instalação

1. instale o node e o npm https://nodejs.org/en/

2. baixe o projeto e rode o comando: npm install

3. Configure a arquivo .env

4. Para rodar o servidor use : npm start 

O servidor já está rodando no google cloud  [http://35.198.5.116/](http://35.198.5.116/) para ser consumido pelo front-end.

## Explicando o projeto 

>    Inicialmente criei uma aplicação com autentificação **JWT** que esta comentada no arquivo `./src/routes/apis.js`. Esse é o arquivo que fica o caminho de cada api e ele redireciona para o `./src/app/controllers`. Essa pasta fica os controladores neles são feitas as regas de negocio de cada api acessada. Utilizei o **MongoDB** com banco a sua conexão e feita no arquivo `./src/databases/mongoDB.js`. Os modais que são onde as colunas são criadas e configuradas fica na pasta
`./src/app/models` cada aquivo representa uma tabela diferente no banco. A pasta `./src/app/middleware` fica os arquivos de autentificação que estão desabilitados. A aquivo `./src/server.js` conecta tudo isso e da inicio ao servidor. Existem comentarios explicando o que cada função e aquivo faz dentro do projeto.

## APIs

* Adicionar nova dívida, informando qual cliente está relacionada a ela: 
O id passado é o id do cliente para adicionar uma nova divida a ele.
`curl --request POST \
  --url http://35.198.5.116/divida/1 \
  --header 'Content-Type: application/json'
  --data '{
	"motivo": "Referente ao aluguel atrazado",
  "date": "2010-12-01",
  "valor": "120"
}'`
  
* Listar todas as dívidas associadas a um determinado cliente:
O id passado é o id do cliente que terá suas dividas expostas
`curl --request GET \
  --url http://35.198.5.116/divida/1`

* Editar uma dívida:
O id passado é o id da divida que será editada.
`curl --request PUT \
  --url http://35.198.5.116/divida/1 \
  --header 'Content-Type: application/json' \
  --data '  {
    "id_usuario": 1,
    "motivo": "Disconto na conta de luz",
    "date": "2010-12-20,
    "valor": 80
  }'`


* Deletar uma dívida:
 O id passado é o id da divida que será apagada.
`curl --request DELETE \
  --url http://35.198.5.116/divida/1 \
  --header 'Content-Type: application/json'`




