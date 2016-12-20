/**
 * Created by mohamedisse on 12/19/16.
 */
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect('mongodb://localhost:27017/teacherapp');
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    math_level: String,
    english_level:String
});

var Student = mongoose.model("Student", studentSchema);

Student.create(
    {
        firstname:'Mohamed',
        lastname:'Hussein',
        math_level:'C',
        english_level:'Z'
    },
    function(err,student){
        if(err){
            console.log(err);
        } else{
            console.log('Newly created student');
            console.log(student);
        }
    });
// Campground.create(
//      {
//          name: "Granite Hill",
//          image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//          description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"

//      },
//      function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATED CAMPGROUND: ");
//           console.log(campground);
//       }
//     });


app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/students", function(req, res){
    // Get all campgrounds from DB
    Student.find({}, function(err, allStudents){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds:allStudents});
        }
    });
});

//CREATE - add new campground to DB
app.post("/students", function(req, res){
    // get data from form and add to campgrounds array
    var first = req.body.firstname;
    var last = req.body.lastname;
    var english = req.body.english_level;
    var math = req.body.math_level;
    var newStudent = { firstname:first ,lastname :last , english_level: english, math_level: math};
    // Create a new campground and save to DB
    Student.create(newStudent, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/students");
        }
    });
});

//NEW - show form to create new campground
app.get("/students/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Student.findById(req.params.id, function(err, foundStudent){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {student: foundStudent});
        }
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function(){
    console.log("The Server Has Started!");
});