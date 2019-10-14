//discover.js

var express = require('express');
var router = express.Router();

//render create page with create pug template
router.get('/', (req, res, next)=>{
  res.render('home', {
    //add most recent models (with Angular?)
  });
  console.log("home screen interactivity ready!");
});

module.exports = router;
