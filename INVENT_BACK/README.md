# Candidate Exercise / Full-stack Web Developer for DisplayNoneStudio

## About The Project

You are going to develop an administration panel for a freight forwarding intermediary company called INVENT.

## Tecnologies and libraries

```bash
- Typescrit
- NestJS
- TypeORM
- MYSQL
- BCRYPTJS
- JWT
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
