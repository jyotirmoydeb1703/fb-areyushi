var express = require('express');
var router = express.Router();
let UserModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post', function(req, res, next){
  res.render('write');
});

router.get('/video', function(req, res, next) {
  res.render('video');
});

router.get('/reviews', function(req, res, next){
  UserModel.find()
  .then(function(data){
    console.log(data)
    res.render('read', {data});
  })
});

router.post('/submit', function(req, res){
  UserModel.create({
    commentname: req.body.commentname,
    reviews: req.body.reviews
  })
  .then(function(a){
    res.redirect('/reviews')
  })
})

module.exports = router;
