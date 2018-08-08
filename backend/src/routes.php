<?php

use \Jacwright\RestServer\RestException;

require_once('controller.php');

class Routes
{
    private $controller;

    public function  __construct() {
        $this->controller = new Controller(__DIR__);
    }

    /**
     * Returns a JSON string object to the browser when hitting the root of the domain
     *
     * @url GET /
     */
    public function listFolders()
    {
        return $this->controller->listFolders();
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
