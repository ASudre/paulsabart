<?php

use \Jacwright\RestServer\RestException;
require_once('service.php');
require_once('files.utils.php');

class Controller
{
    private $service;

    public function __construct($initServive = true) {
        if($initServive) {
            $this->service = new Service();
        }
    }

    public function saveFiles($rootFolder)
    {
        return $this->service->insert(folderParsing($rootFolder, getDirContents($rootFolder)));
    }

    public function getFiles()
    {
        return $this->service->select();
    }

    public function getCategories()
    {
        return $this->service->selectCategories();
    }

    public function getCategoryFiles($category)
    {
        return $this->service->selectByCategory($category);
    }
}

?>