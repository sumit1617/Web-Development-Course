//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>")

})

app.get("/contact", function(req, res){
    res.send("Contact me at: sumit1806@gmail.com")
})

app.get("/about", function(req, res){
    res.send("Hello, I'm Sumit Kumar Singh<br>Go just your mouth")
})

app.listen(3000, function() {
    console.log("Server Started on port 3000");
});
