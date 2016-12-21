#Teachers Pet Application V.1

This is a node.js application that illustrates my take on the MEAN stack. Throughout this app I will adding
new features and trying to build upon what I have built. This a scheduling application that will have the
ability to create a student, delete a student, edit a student's information and read a table of students.These
students will be sorted based on their math and english levels.

##Install
```sh
npm install express bootstrap@3 mongoose body-parser ejs --save
```

##Directory Structure
```
|-- Teacher App
    |--server
        |--bin
        |--node_modules
        |--public
            |--images
            |--javascripts
            |--lib
            |--stylesheets
        |--views
            |--partials
        app.js
        package.json
    readme.md
```

##Starting the App

```
node app.js
```
This will kick-start the server and host the application on localhost:3000