<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . '/../src/controller.php';

final class ControllerTest extends TestCase
{
  
    public function buildFilesObject($filesArray) {
        $filesObject = [];
        foreach ($filesArray as $value) {
            $parsed = explode('/', $value);
            $filesObject[$parsed[0]] = $parsed[1];
        }
        return $filesObject;
    }

    public function testCreateObjectFromFilesArray()
    {
        // Given
        $files = [
            '2018/theme1/pic1.jpg', '2018/theme1/pic2.jpg',
            '2019/theme1/pic1.jpg', '2019/theme1/pic2.jpg',
        ];

        // When
        $filesObject = $this->buildFilesObject($files);

        // Then
        $this->assertEquals('{"2018":"theme1","2019":"theme1"}', json_encode($filesObject));
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
