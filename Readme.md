# 1. Banco de Dados

Será utilizado um banco de dados em nuvem

## 1.1 Categoria: NoSql (Não Relacional)

Foi escolhido um banco não relacional, devido a sua simplicidade e performance em realizar consultas

## 1.2 Tipo: Orientado à Documentos

Nesse tipo de banco de dados, cada registro é salvo num documento, em formato semelhante ao JSON.  
O conjunto de documentos compõe uma coleção.
Banco de Dados -> Coleções -> Documentos

## 1.3 MongoDB

> MongoDB Atlas é o serviço de banco de dados em nuvem global para aplicativos modernos.  
> Implante o MongoDB totalmente gerenciado em AWS, Google Cloud e Azure com a melhor automação e práticas comprovadas que garantem disponibilidade, escalabilidade e conformidade com os padrões de privacidade e segurança de dados mais exigentes.  
> <https://www.mongodb.com/cloud/atlas>

# 2. Routes

## 2.1. BaseURL: https://univesp-pi-6.mybluemix.net/

| Method     | Endpoint (Path) | Action             |
| ---------- | --------------- | ------------------ |
| ---------- | **users**       | ----------------   |
| GET        | /users          | Read all users     |
| GET        | /users/id       | Read user Id       |
| POST       | /users          | Create user        |
| PUT        | /users/id       | Update user Id     |
| DELETE     | /users/id       | Delete user Id     |
| ---------- | **products**    | ----------------   |
| GET        | /products       | Read all products  |
| GET        | /products/id    | Read product Id    |
| POST       | /products       | Create product     |
| PUT        | /products/id    | Update product Id  |
| DELETE     | /products/id    | Delete product Id  |
| ---------- | **locations**   | ----------------   |
| GET        | /locations      | Read all locations |
| GET        | /locations/id   | Read location Id   |
| POST       | /locations      | Create location    |
| PUT        | /locations/id   | Update location Id |
| DELETE     | /locations/id   | Delete location Id |
| ---------- | **assets**      | ----------------   |
| GET        | /assets         | Read all assets    |
| GET        | /assets/id      | Read asset Id      |
| POST       | /assets         | Create asset       |
| PUT        | /assets/id      | Update asset Id    |
| DELETE     | /assets/id      | Delete asset Id    |
