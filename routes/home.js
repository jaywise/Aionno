//home.js

var express = require('express');
var router = express.Router();

//render create page with  create pug template
router.get('/', (req, res, next)=>{
  res.render('home', {
  });
});

module.exports = router;
