<?php

class Service {
  private $conn;

  public function __construct() {
    $this->connectToDB();
  }

  private function connectToDB() {
    $servername = "sql.free.fr";
    $username = "######";
    $password = "######";

    // Create connection
    $this->conn = new mysqli($servername, $username, $password, $username);

    // Check connection
    if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
    }
  }

  public function insert($files) {
    /* Prepared statement, stage 1: prepare */
    if (!($stmt = $this->conn->prepare("INSERT INTO files(theme, category, file_path, file_name) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE theme=?, category=?, file_path=?;"))) {
      echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }
    
    /* Prepared statement, stage 2: bind and execute */
    $theme = $files[0][0];
    $category = $files[0][1];
    $file_path = $files[0][2];
    $file_name = $files[0][3];
    if (!$stmt->bind_param("sssssss", $theme, $category, $file_path, $file_name, $theme, $category, $file_path)) {
        echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
    }

    if (!$stmt->execute()) {
        echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    }

    /* Prepared statement: repeated execution, only data transferred from client to server */
    for ($i = 1; $i < count($files); $i++) {
      $theme = $files[$i][0];
      $category = $files[$i][1];
      $file_path = $files[$i][2];
      $file_name = $files[$i][3];
      if (!$stmt->execute()) {
          echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
      }
    }

    /* explicit close recommended */
    $stmt->close();
    return "";
  }
}

?>