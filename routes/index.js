var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rutvik Patel' });
});
/* Get About Page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* Get Cotact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
/* Get Interest Page */
router.get('/interest', function(req, res, next) {
  res.render('interest', { title: 'My hobbies/ Interest' });
});
/* Get project Page */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Assignment / Project I worked on' });
});


module.exports = router;
