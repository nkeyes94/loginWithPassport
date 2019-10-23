// * Bringing in our required packages
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");

// * Port config
var PORT = process.env.PORT || 8080;

// * App config
var app = express();

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// * Passport config
app.configure(function() {
    app.use(express.static('public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'is this a secret? who knows?! I DONT' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
});

// * Router config
const routes = require("./routes/routes.js")(app);

app.listen(PORT, function(){
    console.log("Application listening on localhost:" + PORT);
});

module.exports = app;