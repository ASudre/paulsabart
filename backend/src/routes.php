<?php

use \Jacwright\RestServer\RestException;

$config = file_get_contents(__DIR__ . '/config.json');
require_once('controller.php');

class Routes
{
    private $controller;

    public function  __construct() {
        $this->controller = new Controller();
    }

    /**
     * Returns a JSON string object to the browser when hitting the root of the domain
     *
     * @url GET /
     */
    public function listFolders()
    {
        global $config;
        $rootFolder = json_decode($config) -> development -> rootFolder;
        return $this->controller->saveFiles(__DIR__ . $rootFolder);
    }

    /**
     * Throws an error
     * 
     * @url GET /error
     */
    public function throwError() {
        throw new RestException(401, "Empty password not allowed");
    }
}

?>