<?php

function getDirContents($path) {
  $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path));

  $files = array();
  foreach ($rii as $file)
      if (!$file->isDir())
          $files[] = $file->getPathname();

  return $files;
}

function buildFilesObjectFromFilesArray($filesArray) {
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

function fileParsing($folderPath, $filePath) {
  $parsed;
  $exploded = explode('/', str_replace($folderPath . '/', '', $filePath));
  if (count($exploded) < 3) {
      return null;
  }
  $parsed[0] = $exploded[0];
  $parsed[1] = $exploded[1];
  $parsed[2] = implode('/', array_slice($exploded, 2, -1));
  $parsed[3] = $exploded[count($exploded) - 1];
  return $parsed;
}

function folderParsing($folderPath, $filesPathFolder) {
  $parsedFolder = [];
  foreach ($filesPathFolder as $file) {
      $fileParsed = fileParsing($folderPath, $file);
      if($fileParsed) {
          array_push($parsedFolder, $fileParsed);
      }
  }
  return $parsedFolder;
}

?>
