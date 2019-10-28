//discover.js



var express = require('express');
var router = express.Router();

var arrayofobject =    [

];


console.log("print newValue as: " + newValue);

var newValue = "";

// var news = [];
// var this_news = {
//   'title': item.title,
//   'description': item.description
// }
// news.push(this_news);
//
// var name2 = "";

//render create page with  create pug template

router.get('/', (req, res, next)=>{
  res.render('home', {
    data: "stupid sample"
  });
});

module.exports = router;
