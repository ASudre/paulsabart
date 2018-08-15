<?php

date_default_timezone_set('Europe/Paris');

require __DIR__ . '/vendor/jacwright/restserver/source/Jacwright/RestServer/RestServer.php';
require __DIR__ . '/src/routes.php';

$server = new \Jacwright\RestServer\RestServer('debug');
$server->useCors = true;
$server->allowedOrigin = array('http://localhost:8080');
$server->addClass('routes');
$server->handle();
