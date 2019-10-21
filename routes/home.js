//discover.js

var express = require('express');
var router = express.Router();
var data =    [
                {name: "affirmation", description: "create sense of belonging", studentState: "timid", situationState: "independent work"},
                {name: "chunking", description: "breaking up content", studentState: "anxious", situationState: "independent work"}

var news = [];
var this_news = {
  'title': item.title,
  'description': item.description
}
news.push(this_news);

//render create page with create pug template
router.get('/', (req, res, next)=>{
  res.render('home', {
    newsi: JSON.stringify(news)
  });
});

module.exports = router;
