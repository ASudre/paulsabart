<?php

function getDirContents($path) {
  $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path));

  $files = array();
  foreach ($rii as $file)
      if (!$file->isDir())
          $files[] = $file->getPathname();

  return $files;
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
