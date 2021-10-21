var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home',});
});
/* GET About page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'About',});
});
/* GET Products page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Products',});
});
/* GET Services page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Services',});
});

/* GET Contact Us page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Contact',});
});


module.exports = router;
