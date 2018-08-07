<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . '/../src/controller.php';

final class ControllerTest extends TestCase
{
  
    public function testCreateObject()
    {
        // Given
        $folders = new stdClass();

        // When
        $folders->name = "John";
        $folders->age = 30;
        $folders->city = "New York";
        
        // Then
        $this->assertEquals(json_encode($folders), '{"name":"John","age":30,"city":"New York"}');
    }

    public function testRecusiveFoldersScan() {
        // Given
        $folderPath = __DIR__ . '/scanTest';
        $controller = new Controller($folderPath);

        // When
        $scan = $controller->getDirContents($folderPath);

        // Then
        $this->assertEquals($scan[0], '/Users/arthursudre/workspace/perso/paulsabart/backend/tests/scanTest/subFile/subSubFile/file.jpg');
        $this->assertEquals($scan[1], '/Users/arthursudre/workspace/perso/paulsabart/backend/tests/scanTest/subFile/file.csv');
    }

}
