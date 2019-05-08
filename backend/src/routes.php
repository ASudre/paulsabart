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
    public function getFiles()
    {
        return $this->controller->getFiles();
    }
    
    /**
     * Gets the categories
     *
     * @url GET /categories
     */
    public function getCategories()
    {
        return $this->controller->getCategories();
    }

    /**
     * Gets the files by category
     *
     * @url GET /files/theme/$theme/category/$category
     */
    public function getFilesInThemeAndCategory($theme = null, $category = null)
    {
        if (!$theme || !$category) {
            return [];
        }
        return $this->controller->getFilesInThemeAndCategory($theme, $category);
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