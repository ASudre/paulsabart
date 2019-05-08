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

```bash
cd backend
php composer.phar install
php -S localhost:8000
```

### Tests

```bash
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/controller.spec.php
```

### Mysql

Launch mysql docker:

```bash
docker pull mysql:5.7
docker run --name=mysql -p=3306:3306 -e MYSQL_ROOT_PASSWORD=rukshani -d mysql:5.7
```

Initiate database with the scripts : `backend/database/create.sql` and `backend/database/init.sql`

Start the php server and call the endpoint : `GET localhost:8000/`
