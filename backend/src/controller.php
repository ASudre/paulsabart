<?php

use \Jacwright\RestServer\RestException;

class Controller
{
    private $defaultFolderPath;

    public function  __construct($folderPath) {
        $this->defaultFolderPath = $folderPath;
    }

    public function getDirContents($path) {
        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path));
    
        $files = array(); 
        foreach ($rii as $file)
            if (!$file->isDir())
                $files[] = $file->getPathname();
    
        return $files;
    }

    public function listFolders()
    {
        return $this->getDirContents($this->defaultFolderPath);
    }
}
