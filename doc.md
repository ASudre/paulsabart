# PaulSabArt documentation

## Upload files
- Connect to your favorite FTP client software on zyriane
- The images folder is backend/images
- The first folder level is for themes, the second one for categories. You can add subfolders that won't be taken into account for the themes or categories
- upload your files in the right folder

## Update the database
- Open the app Postman
- Choose POST
- use the following url : `http://zyriane.free.fr/backend/`
- you should see `"Successfully updated"`

## Add the comments
- connect on `sql.free.fr` with the usual credentials
- click on files in the side menu, you should see all the uploaded files
- click `check all` at the end of the page then click on the little pen on the right
- you can then edit the `comment` line for each file
- save by clicking on `go` at the end of the page