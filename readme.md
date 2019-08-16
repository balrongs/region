# Regions and Communes Server

Service to obtain the regions and communes of Chile. Develop on [Koajs](https://koajs.com/) framework for node.js



## Requerimients

* Node v7.6.0 or higher.

* Docker

* Create an .env file with the following data:

```

POSTGRES_USER=*** Your postgres user ***
POSTGRES_PASSWORD=*** Your postgres password ***
POSTGRES_DB=*** Your postgres db name ***
POSTGRES_HOST=db
POSTGRES_PORT=***DEFAULT POSTGRES PORT 5432***
DB_DIALECT=postgres
EXTERNAL_POSTGRES_PORT=***THE PORT IN WICH WILL WORK POSTGRES OUTSIDE THE CONTAINER***
DEFAULT_PORT=***DEFAULT PORT IN WICH WILL WORK THE ENDPOINT***
EXTERNAL_API_PORT=***THE PORT IN WICH WILL WORK API OUTSIDE THE CONTAINER***
NODE_ENV=database_config
SCRIPT_FILE=***The complete path in wich you have your setup_env.sh file***

```


## Installation using Docker
If you use Docker, you only have to execute

```

$ npm run docker

```

All migrations and seeders are covered and executed.

## Installation using traditional way
On project directory execute

```

$ npm install

```
### Configuring PostgreSQL database
After database instalation, for testing purposes you should configure your database with these params:

```

POSTGRES_USER: *** Your postgres user ***
POSTGRES_PASSWORD: *** Your postgres password ***
POSTGRES_DB: *** Your postgres db name ***

```

If you want to use other data, first you have to change config file located in `src/config/database.js`.

### Database connection
This project use [Sequelize](http://docs.sequelizejs.com/). The config file is located in `src/config/database.js`.

### Migrations
Migrations directory is located in `db/migrations`. Run migration with:

```
$ npm run sequelize db:migrate
```
> undo migrations with `$ npm run sequelize db:migrate:undo:all`

### Seeders
Seeders directory is located in `db/seeders`. Run seeders with:
```
$ npm run sequelize db:seed:all
```
> undo seeders with `$ npm run sequelize db:seed:undo:all`

## Running test
To run unit tests and run server in test environment, run with:

```
$ npm run test
```

This project can also run tests without initialize the API.To do this, run with:
```
$ npm run test
```


## Running server

Run server in develop environment:

```

$ npm run dev

```

To run server in develop environment and automatically restart the server when changes are made in the code, run with:

```

$ npm run nodemon

```
