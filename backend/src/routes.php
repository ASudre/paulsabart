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
    public function routes()
    {
        switch ($_GET['route']) {
            case 'categories':
                return $this->controller->getCategories();
            case 'filesByThemeAndCategories':
                if (!$_GET['theme'] || !$_GET['category']) {
                    return [];
                }
                return $this->controller->getFilesInThemeAndCategory($_GET['theme'], $_GET['category']);
            default:
                return $this->controller->getFiles();
        }
    }

    /**
     * Returns a JSON string object to the browser when hitting the root of the domain
     *
     * @url POST /
     */
    public function saveFiles()
    {
        global $config;
        $rootFolder = json_decode($config) -> rootFolder;
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