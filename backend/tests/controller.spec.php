<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . '/../src/controller.php';

final class ControllerTest extends TestCase
{
    public function testCreateObjectWhenNoFile()
    {
        // Given
        $controller = new Controller();
        $files = [];

        // When
        $filesObject = $controller->buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFile()
    {
        // Given
        $controller = new Controller();
        $files = [
            'img.csv'
        ];

        // When
        $filesObject = $controller->buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFolderInOneFile()
    {
        // Given
        $controller = new Controller();
        $files = [
            'folder/img.csv'
        ];

        // When
        $filesObject = $controller->buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFileInTwoFolders()
    {
        // Given
        $controller = new Controller();
        $files = [
            'folder1/folder2/img.csv'
        ];

        // When
        $filesObject = $controller->buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{"folder1":{"folder2":["img.csv"]}}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFileInThreeFolders()
    {
        // Given
        $controller = new Controller();
        $files = [
            'folder1/folder2/folder3/img.csv'
        ];

        // When
        $filesObject = $controller->buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{"folder1":{"folder2":["folder3\/img.csv"]}}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectFromFilesArray()
    {
        // Given
        $controller = new Controller();
        $files = [
            '2018/theme1/pic1.jpg', '2018/theme1/pic2.jpg',
            '2018/theme1/pic3.jpg', '2018/theme2/pic2.jpg',
            '2019/theme1/pic1.jpg', '2019/theme2/pic2.jpg',
        ];

        // When
        $filesObject = $controller->buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{"2018":{"theme1":["pic1.jpg","pic2.jpg","pic3.jpg"],"theme2":["pic2.jpg"]},"2019":{"theme1":["pic1.jpg"],"theme2":["pic2.jpg"]}}',
            json_encode($filesObject)
        );
    }

    public function testRecusiveFoldersScan() {
        // Given
        $folderPath = __DIR__ . '/scanTest';
        $controller = new Controller($folderPath);

        // When
        $scan = $controller->getDirContents($folderPath);

        // Then
        $this->assertEquals(
            '/Users/arthursudre/workspace/perso/paulsabart/backend/tests/scanTest/subFile/subSubFile/file.jpg',
            $scan[0]
        );
        $this->assertEquals(
            '/Users/arthursudre/workspace/perso/paulsabart/backend/tests/scanTest/subFile/file.csv',
            $scan[1]
        );
    }

}
