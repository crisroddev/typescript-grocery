# typescript-grocery
## First Config tsconfig.json

### Package.json needs ts-node and typescript golbally
```
yarn add -D ts-node typescript
```
### Types express
```
yarn add -D @types/express
yarn add -D @types/node
```
### Nodemon config
### ormconfig for DB
### Create DB
postgres psql
Create database groceries
Create User
Grant Privileges To User

### .env File

### DB Dependencies
```
typeorm reflect-metadata pg
```
### Add Entities
- Items
- GroceryList

### Use Async so the database connect before does anything

### Routes
#### Controllers and Middlewares Folders
- Midlewares: ```errors.middlewares.ts```
- Controllers: ``` groceries.handlers.ts groceries.routes.ts```


