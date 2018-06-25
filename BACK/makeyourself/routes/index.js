var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

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

router.post('/registration', function (req, res, next) {
    //CHECK MAIL
     database.sendQuery('SELECT mail FROM `users`', function (err, results) {
         if (err) {
             console.log(err)
         } else {
             for (var i = 0; i < results.length; i++) {
                 if (results[i].mail == req.body.mail) {
                     console.log(req.body.mail)
                     err = 'votre mail est déjà enregistré'
                     res.json(err)
                 } else {
                     //HASHPASSWORD
                     bcrypt.hashSync(req.body.password, 10, function (err, hash) {
                         if (err) {
                             return next(err);
                         }
                         console.log(req.body)
                         req.body.password = hash;
                         next();
                         //INSERT IN DATABASE
                         database.sendQuery('INSERT INTO `users` (mail, password, phone_number, lastname, firstname) VALUES("' + req.body.email + '", "' + req.body.password + '", "' + req.body.phone + '","' + req.body.lastname + '", "' + req.body.firstname + '")', function (err, results) {
                             if (err) {
                                 console.log(err)
                             } else {
                                 console.log(results)
                                 res.json(results);
                             }
                         })
                     })
                 }
             }
         }
     })
    /*console.log(req.body)
    database.sendQuery('SELECT * FROM `users` WHERE mail = ' + req.body.mail + '', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
        }
    })*/
});

module.exports = router;
