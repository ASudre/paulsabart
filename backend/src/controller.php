<?php

use \Jacwright\RestServer\RestException;

class Controller
{

    public function getDirContents($path) {
        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path));
    
        $files = array(); 
        foreach ($rii as $file)
            if (!$file->isDir())
                $files[] = $file->getPathname();
    
        return $files;
    }

    public function listFolders($rootFolder)
    {
        return $this->buildFilesObjectFromFilesArray($this->getDirContents($rootFolder));
    }

    public function buildFilesObjectFromFilesArray($filesArray) {
        $filesObject = [];
        foreach ($filesArray as $value) {
            $parsed = explode('/', $value);
            if (count($parsed) < 3) {
                break;
            }
            $filesPaths = implode('/', array_slice($parsed, 2));
            if (array_key_exists($parsed[0], $filesObject)) {
                $currentFolderFiles = [];
                if (array_key_exists($parsed[1], $filesObject[$parsed[0]])) {
                    $currentFolderFiles = $filesObject[$parsed[0]][$parsed[1]];
                }
                $filesObject[$parsed[0]] =
                    array_merge(
                        $filesObject[$parsed[0]],
                        array($parsed[1] => array_merge($currentFolderFiles, [$filesPaths]))
                    );
            } else {
                $filesObject[$parsed[0]] = array($parsed[1] => [$filesPaths]);                
            }
        }
        if(count($filesObject) == 0) {
            return new stdClass();
        }
        return $filesObject;
    }
}
