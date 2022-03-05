# PaulSabArt

## Front

### Front - Start

```bash
cd front
yarn
yarn start
```

### Build

```bash
cd front
yarn build
```

## Backend

### Backend - Start

Install composer.phar in backend following the instructions at https://getcomposer.org/download/

```bash
docker-compose up
```

Initiate database with the scripts : `backend/database/create.sql` and `backend/database/init.sql`

Call the endpoint : `GET localhost:8000/`

### Tests

```bash
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/controller.spec.php
```
