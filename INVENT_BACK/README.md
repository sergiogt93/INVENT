# Candidate Exercise / Full-stack Web Developer for DisplayNoneStudio

## About The Project

You are going to develop an administration panel for a freight forwarding intermediary company called INVENT.

## Tecnologies and libraries

```bash
- DOCKER
- Typescrit
- NestJS
- TypeORM
- MYSQL
- BCRYPTJS
- JWT
- SWAGGER
```

## Description

<p align="center"> LIST OF TASKS DEMANDED</p>

1.DONE ✅
This panel will be protected, so you will need to log in to access it.

2.DONE ✅
Workers will be able to create shipments through the platform by adding these data:
- Destination address.
- Postal code.
- Recipient's name.
- Sender's name.
- Weight of the shipment (in kg).

3.DONE ✅
Once the data has been entered, the system will automatically choose the transport company in charge of and will calculate the price of the service.
INVENT ships through different companies whenever possible.
The choice of the carrier is made on the basis of the first two digits of the postal code.

4.DONE ✅
There are several categories of shipments and for each of them a specific formula is available to calculate the final price.
to calculate the final price.
Una vez calculado el precio y creado el envío se guardará esta información para poder visualizarla
en cualquier momento.

## Installation

```bash
$ npm install
```

## Running the app

```bash

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## CONFIGURATION PROJECT

```bash
Remember generate and fill out file .env watching example .env template
```

## CONFIGURATION DATABASE
```bash
# To synchronize a database schema use:
# Be careful running this command in production - schema sync may cause data loss if you don't use it wisely. Check which sql queries it will run before running on production.
$ npm run typeorm:schema:sync

# Create does not really do any database sync. It just makes template for your new migration.
$ npm run migration:create path_to_file
# npm run migration:create ./bd/migrations/initialMigration.ts

# try to make your defined entity appear in database.
$ npm run migration:generate path_to_file
# npm run migration:generate ./bd/migrations/initialMigration.ts

# To execute all pending migrations use following
$ npm run migration:run

# To revert the most recently executed migration use the
$ npm run migration:revert

```

## VIEW SWAGGER API
First execute 
```bash
npm run start:dev
```
After navigate to url:
```bash
localhost:3000/docs
```