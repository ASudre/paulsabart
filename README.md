# PaulSabArt

## Front

### Start
```
cd front
yarn
yarn start
```

### Build
```
cd front
yarn build
```

## Backend

### Start
```
cd backend
php composer.phar install
php -S localhost:8000
```

### Tests
```
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/controller.spec.php
```

### Mysql
Launch mysql docker:
```
docker pull mysql:5.7
docker run --name=mysql -p=3306:3306 -e MYSQL_ROOT_PASSWORD=rukshani -d mysql:5.7
```

Initiate database with the script : `backend/database/create.sql`

Start the php server and call the endpoint : `GET /`
