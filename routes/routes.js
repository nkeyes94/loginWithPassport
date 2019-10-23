module.exports = function(app) {
    app.get("/", function(req, res){
        console.log("Hit the home route");
        res.render("home");
    })
};