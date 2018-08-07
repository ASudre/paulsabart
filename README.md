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
