var express = require('express');
var router = express.Router();

var database = require('../services/database.js')


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index')

    /*database.sendQuery('SELECT * FROM ...', function (err, results) {
        if(err) {

        } else {
            res.json(results);
        }
    })

    //if(req.session.page_views){
    //    req.session.page_views++;
    //    res.send("You visited this page " + req.session.page_views + " times");
    //} else {
    //    req.session.page_views = 1;
    //    res.send("Welcome to this page for the first time");
    //}*/
});

router.get('/post', function (req, res, next) {
    res.render('post');
});

router.post('/post', function (req, res, next) {
    res.json(req.body);
});

router.post('/test', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;
