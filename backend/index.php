<?php

require __DIR__ . '/vendor/jacwright/restserver/source/Jacwright/RestServer/RestServer.php';
require __DIR__ . '/src/routes.php';

$server = new \Jacwright\RestServer\RestServer('debug');
$server->useCors = true;
$server->allowedOrigin = array('http://localhost:3000');
$server->addClass('routes');
$server->handle();
