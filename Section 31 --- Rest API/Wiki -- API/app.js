const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const url = "mongodb://0.0.0.0:27017/wikiDB"
mongoose.set('strictQuery', true);
mongoose.connect(url)


const articleSchema = {
    title : String,
    content : String
}

const Article = mongoose.model("Article", articleSchema);


// Request Targetting the All Articles //

app.route("/articles")
.get(function(req, res){
  Article.find(function(err, foundArticles){
    if(!err){
      res.send(foundArticles)
    }else {
      res.send(err)
    }
  })
})
.post(function(req, res){
   const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err){
    if (!err){
      res.send("Successfully added new article.")
    } else {
      res.send(err)
    }
  })
});


// Request Targetting the Specific Articles //

app.route("/articles/:articleTitle")

.get(function(req, res){

  Article.find({title: req.params.articleTitle}, function(err, foundArticle){
    if(foundArticle){
      res.send(foundArticle)
    } else {
      res.send("No Articles Matching that Title was found");
    }
  })
})

.put(function(req, res){
  Article.updateOne(
  {title: req.params.articleTitle},
  {$set: {title: req.body.title, content: req.body.content}},
  {overwrite: true},
  function(err){
    if(!err){
      res.send("Successfully updated the article")
    } else {
      res.send(err)
    }
  }
  );
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});