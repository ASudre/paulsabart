<?php
use PHPUnit\Framework\TestCase;

require __DIR__ . '/../src/files.utils.php';

final class ControllerTest extends TestCase
{
    public function testCreateObjectWhenNoFile()
    {
        // Given
        $files = [];

        // When
        $filesObject = buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFile()
    {
        // Given
        $files = [
            'img.csv'
        ];

        // When
        $filesObject = buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFolderInOneFile()
    {
        // Given
        $files = [
            'folder/img.csv'
        ];

        // When
        $filesObject = buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFileInTwoFolders()
    {
        // Given
        $files = [
            'folder1/folder2/img.csv'
        ];

        // When
        $filesObject = buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{"folder1":{"folder2":["img.csv"]}}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectWhenOneFileInThreeFolders()
    {
        // Given
        $files = [
            'folder1/folder2/folder3/img.csv'
        ];

        // When
        $filesObject = buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{"folder1":{"folder2":["folder3\/img.csv"]}}',
            json_encode($filesObject)
        );
    }

    public function testCreateObjectFromFilesArray()
    {
        // Given
        $files = [
            '2018/theme1/pic1.jpg', '2018/theme1/pic2.jpg',
            '2018/theme1/pic3.jpg', '2018/theme2/pic2.jpg',
            '2019/theme1/pic1.jpg', '2019/theme2/pic2.jpg',
        ];

        // When
        $filesObject = buildFilesObjectFromFilesArray($files);

        // Then
        $this->assertEquals(
            '{"2018":{"theme1":["pic1.jpg","pic2.jpg","pic3.jpg"],"theme2":["pic2.jpg"]},"2019":{"theme1":["pic1.jpg"],"theme2":["pic2.jpg"]}}',
            json_encode($filesObject)
        );
    }

    public function testRecusiveFoldersScan() {
        // Given
        $folderPath = __DIR__ . '/scanTest';

        // When
        $scan = getDirContents($folderPath);

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

    public function testFilePathParsing() {
        // Given
        $folderPath = '/User/arthur/images';
        $filePath = $folderPath . '/2018/theme1/pic1.jpg';

        // When
        $parsed = fileParsing($folderPath, $filePath);

        // Then
        $this->assertEquals('2018', $parsed[0]);
        $this->assertEquals('theme1', $parsed[1]);
        $this->assertEquals('', $parsed[2]);
        $this->assertEquals('pic1.jpg', $parsed[3]);
    }

    public function testFilePathParsingWhenInSubfolder() {
        // Given
        $folderPath = '/User/arthur/images';
        $filePath = $folderPath . '/2018/theme1/subfolder1/subfolder2/pic1.jpg';

        // When
        $parsed = fileParsing($folderPath, $filePath);

        // Then
        $this->assertEquals('2018', $parsed[0]);
        $this->assertEquals('theme1', $parsed[1]);
        $this->assertEquals('subfolder1/subfolder2', $parsed[2]);
        $this->assertEquals('pic1.jpg', $parsed[3]);
    }

    public function testFolderPathsParsingWhenFolderWithNoFile() {
        // Given
        $folderPath = '/User/arthur/images';
        $folderPaths = [
            $folderPath . '/2018/theme1/subfolder1/subfolder2/pic1.jpg',
            $folderPath . '/2018/theme1'
        ];

        // When
        $parsed = folderParsing($folderPath, $folderPaths);

        // Then
        $this->assertEquals('2018', $parsed[0][0]);
        $this->assertEquals('theme1', $parsed[0][1]);
        $this->assertEquals('subfolder1/subfolder2', $parsed[0][2]);
        $this->assertEquals('pic1.jpg', $parsed[0][3]);
    }
}

?>