
## Description

Nest JS University Search API application

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

API will looks like the following
http://localhost:9898/university?name=Cairo&order=Asc
http://localhost:9898/university?name=Cairo&order=Des

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Docker Commands

```bash
# image build command
$ docker build -t university-nest-app . 

# docker run command
$ docker run --rm -v ${PWD}:/app -v /app/node_modules -p 9898:9898 university-nest-app



# container run command
$ npm run test:e2e

```
