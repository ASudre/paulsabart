import 'jest';

import filesUtils from './files.utils';

describe('files.utils', () => {
  describe('build files structure', () => {
    it('should buid an object with the structure', () => {
      // When
      const files = [
        {
          "theme": "theme1",
          "category": "category1",
          "file_path": "",
          "file_name": "img.png",
          "comment": null,
          "inserted_at": "2018-08-12 12:10:02",
          "updated_at": "2018-08-12 12:10:02"
        },
        {
          "theme": "theme1",
          "category": "category2",
          "file_path": "coucou",
          "file_name": "test.jpg",
          "comment": null,
          "inserted_at": "2018-08-12 12:10:02",
          "updated_at": "2018-08-12 12:10:02"
        },
        {
          "theme": "theme1",
          "category": "category2",
          "file_path": "coucou",
          "file_name": "test2.jpg",
          "comment": null,
          "inserted_at": "2018-08-12 12:10:02",
          "updated_at": "2018-08-12 12:10:02"
        }
      ];

      // When
      const filesObject = filesUtils.buildMenuContent(files);

      // Then
      expect(filesObject).toEqual({
        "theme1": {
          "category1": [
            {
              "theme": "theme1",
              "category": "category1",
              "file_path": "",
              "file_name": "img.png",
              "comment": null,
              "inserted_at": "2018-08-12 12:10:02",
              "updated_at": "2018-08-12 12:10:02"
            }
          ],
          "category2": [
            {
              "theme": "theme1",
              "category": "category2",
              "file_path": "coucou",
              "file_name": "test.jpg",
              "comment": null,
              "inserted_at": "2018-08-12 12:10:02",
              "updated_at": "2018-08-12 12:10:02"
            },
            {
              "theme": "theme1",
              "category": "category2",
              "file_path": "coucou",
              "file_name": "test2.jpg",
              "comment": null,
              "inserted_at": "2018-08-12 12:10:02",
              "updated_at": "2018-08-12 12:10:02"
            }
          ]
        }
      });
    })
  })
})