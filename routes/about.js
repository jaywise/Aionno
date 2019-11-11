//home.js

var express = require('express');
var router = express.Router();

//render create page with  create pug template
router.get('/about', (req, res, next)=>{
  res.render('about', {
    title:'About'
  });
});

module.exports = router;
