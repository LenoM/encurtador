# API

## INTRODUÇÃO
  Este projeto foi produzido visando explorar ao máximo os padrões e estratégias conhecidos. Qualquer exagero não ocorreu por acaso, pois o principal objetivo foi demonstrar algumas possibilidades não convencionais de arquitetura.

  Para saber mais consulte a documentação da api.

## INSTALAÇÃO
  Antes de instalar, certifique-se de ter um banco de nome "encurtador" criado em seu postgres local, remoto ou ate mesmo em algum container do docker.

  Nota: No arquivo .env presente na raiz do projeto estão as principais configurações que podem ser alteradas, como: variáveis de conexão, porta da aplicação, etc.

  A instalação do projeto pode ser feita utilizando o comando:
  ```bash
  npm install
  ```

## EXECUTAR O PROJETO
  O comando abaixo irá executar a API:
  ```bash
  npm start
  ```
  Após a execução, navegue até: http://localhost:8081/
 
## TEST
  Para testar o projeto, basta executar o comando:
  ```bash
  npm run test
  ```

## DOCKER
  Para criar a imagem Dockernizada foi utilizado o comando:
  ```bash
  docker build -t lenomotac/encurtador .
  ```

  Para criar o container foi utilizado o comando:
  ```bash
  docker run -p 8081:8081 -d lenomotac/encurtador
  ```
## CONTRIBUIÇÕES
  Acho que não teremos contribuições aqui, mas caso tenha alguma sugestão de melhoria, converse comigo! Adoraria Saber.