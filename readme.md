#Teachers Pet Application

This is a Node.js/Express application that illustrates my take on the MEAN stack.
Throughout this app I will implementing new features and testing out ways I can learn about full-stack development.



##Getting Started
```
git clone https://github.com/mohamedr20/Teacher_Pet.git
npm install
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
##Prerequisites
You will need to have mongodb installed on your system in order to use mongoose

If you don't visit: https://docs.mongodb.com/manual/administration/install-community/

Follow the instructions here and you should be good to go.

##Installing
Our development environment will be run on the local server

This piece of code in our app.js starts up the server
```
app.listen(3000, function(){
    console.log("The Server Has Started!");
});
```
To start the server run this command in the terminal
```
node app.js
```
Go to localhost:3000 after you run the command

##Running Tests
Unit testing is coming with v2

##Built with
*[Express](http://expressjs.com/) --Lightweight Javascript Web Framework*

*[Node](https://nodejs.org/en/docs/) -- Powerful Event-driven I/O server-side JavaScript environment based on V8 Engine*

##Version
This is the first version of the app

##Authors
* **Mohamed Isse** - *Inital work* - [MohamedIsse](https:github.com/mohamer20)

##License
This project is licensed under the MIT License

##Acknowledgments
*Mostafa Baiou --first mentor*
*Colt Steele -- Taught me about full-stack developement using Node.JS & Express*
