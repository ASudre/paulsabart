<?php

use \Jacwright\RestServer\RestException;

class Controller
{
    private $folderPath;

    public function  __construct($folderPath) {
        $this->folderPath = $folderPath;
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
        return $this->getDirContents($this->folderPath);
    }
}
