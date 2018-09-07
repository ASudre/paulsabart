<?php

class Service {
  private $conn;
  private $sqlConfig;

  public function __construct() {
    global $config;
    $this->sqlConfig = json_decode($config) -> mysql;
    $this->connectToDB();
  }

  private function connectToDB() {
    $servername = $this->sqlConfig -> host;
    $database = $this->sqlConfig -> database;
    $username = $this->sqlConfig -> user;
    $password = $this->sqlConfig -> password;

    // Create connection
    $this->conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
    }
  }

  public function insert($files) {
    /* Prepared statement, stage 1: prepare */
    if (!($stmt = $this->conn->prepare("INSERT INTO files(theme, category, file_path, file_name, comment, updated_at) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE theme=?, category=?, file_path=?, updated_at=?;"))) {
      echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }
    
    /* Prepared statement, stage 2: bind and execute */
    $theme = $files[0][0];
    $category = $files[0][1];
    $file_path = $files[0][2];
    $file_name = $files[0][3];
    $comment = explode('.', $files[0][3])[0];
    $date = new DateTime();
    $updated_at = $date->format('Y-m-d H:i:s');
    if (!$stmt->bind_param("ssssssssss", $theme, $category, $file_path, $file_name, $comment, $updated_at, $theme, $category, $file_path, $updated_at)) {
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
      $comment = explode('.', $files[$i][3])[0];
      if (!$stmt->execute()) {
          echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
      }
    }
    /* explicit close recommended */
    $stmt->close();

    // Clean removed images
    if (!($stmt = $this->conn->prepare("DELETE FROM files where updated_at <> ?"))) {
      echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }

    if (!$stmt->bind_param("s", $updated_at)) {
      echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
    }

    if (!$stmt->execute()) {
      echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    }

    $stmt->close();

    return "Successfully updated";
  }

  public function select() {
    $result = $this->conn->query("SELECT * from files order by theme desc, category desc, file_name asc");

    $data = array();
    while($row = $result->fetch_assoc()) {
      array_push($data, $row);
    }
    return $data;
  }
}

?>