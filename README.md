# t1moduleIV 
## product, user API
This project contains a product and user requests `CRUD` and has been created using the following stacks `nodejs`, `javascript`, `mongoose`, `mongo altas` 
## authors
 * Marco Antonio Baltazar Santos, mabsbaltazar@gmail.com, 60717546
 * Juan Alberto Canqui Ticona, juan.alberto.canqui.ticona@gmail.com, 75277803
 * Franz Alejandro Castellon Arancibia, gnfranz@gmail.com, 68642473

### github Repository
branch name: `main` 
```sh
https://github.com/sucmar/t1moduleIV
```
### Set up and Installation
In order to run app, please execute the following scripts: 
```sh
git clone https://github.com/sucmar/t1moduleIV.git
cd t1moduleIV
yarn install
yarn dev
```
## t1moduleIV product_endpoints
### GET 
```sh
/api/v1/product
```
```json
{
   "status": "ok",
   "data": [
       {
           "_id": "63c60913e80445a7a5a110d1",
           "inventory": 200,
           "name": "tv",
           "price": 45,
           "unit": "unidad",
           "__v": 0
       }
   ]
}
```
### POST
```sh
/api/v1/product
```
`req.body` to send
```json
{
   "name":"platano",
   "price":45,
   "unit":"unidad",
   "inventory":200
}
```
json response
```json
{
   "status": "ok",
   "dataInserted": {
       "inventory": 200,
       "_id": "63cc2bc314b9b6cc0d04e5e2",
       "name": "tv",
       "price": 45,
       "unit": "unidad",
       "__v": 0
   }
}
```
### GET BY ID
```sh
/api/v1/product/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "data": {
       "_id": "63cc2bc314b9b6cc0d04e5e2",
       "inventory": 200,
       "name": "tv",
       "price": 45,
       "unit": "unidad",
       "__v": 0
   }
}
```

### PUT
```sh
/api/v1/product/:id
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
   "name":"platano 2",
   "price":45,
   "unit":"unidad",
   "inventory":200
}
```
json response
```json
{
   "status": "ok",
   "data": {
       "_id": "63c60913e80445a7a5a110d1",
       "inventory": 200,
       "name": "platano 2",
       "price": 45,
       "unit": "unidad",
       "__v": 0
   }
}
```

### DELETE
```sh
/api/v1/product/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "message": "platano 2 has been deleted"
}
```
## t1moduleIV user_endpoints
### GET 
```sh
/api/v1/user
```
```json
{
   "status": "ok",
   "data": [
        {
            "_id": "63cbdffac6f6cfae5bdd067a",
            "firstName": "messi",
            "email": "messi@gmail.com",
            "password": "123",
            "lastName": "test2",
            "__v": 0
        }
   ]
}
```
### POST
 ```sh
 /api/v1/user
```
`req.body` to send 
```json
{
   "email":"prueba@gmail.com",
   "password":"123456",
   "firstName":"juan",
   "lastName":"canqui"
}
```
json response
```json
{
   "status": "ok",
   "dataInserted": {
       "_id": "63cc2740c00d51a8f16d4297",
       "email": "prueba@gmail.com",
       "password": "123456",
       "firstName": "juan",
       "lastName": "canqui",
       "__v": 0
   }
}
```
### GET BY ID
```sh
/api/v1/user/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "data": {
       "_id": "63cc2740c00d51a8f16d4297",
       "email": "locoto@gmail.com",
       "password": "platano123",
       "firstName": "Miguel",
       "lastName": "Picasso",
       "__v": 0
   }
}
```

### PUT
```sh
/api/v1/user/:id
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
  "email":"prueba@gmail.com",
  "password":"123456",
  "firstName":"juan",
  "lastName":"canqui"
}
```
json response
```json
{
   "status": "ok",
   "data": {
       "_id": "63cc2740c00d51a8f16d4297",
       "email": "prueba@gmail.com",
       "password": "123456",
       "firstName": "juan",
       "lastName": "canqui",
       "__v": 0
   }
}
```
### DELETE
```sh
/api/v1/product/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "message": "juan has been deleted"
}
```