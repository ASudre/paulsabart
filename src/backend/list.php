<?php
  $files = scandir($_GET["folder_path"]);
  print_r(json_encode($files));
?>
