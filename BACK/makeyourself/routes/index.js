var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var path = require('path')

var database = require('../services/database.js')

router.get('/', function (req, res, next) {
    res.sendfile(path.resolve(__dirname + '/../public/index.html'))
})
router.post('/test', function (req, res, next) {
    console.log(req.body);
});

router.post('/registration', function (req, res, next) {
    //CHECK MAIL
    database.sendQuery('SELECT * FROM `users` WHERE mail LIKE "' + req.body.email + '"', function (err, results) {
        if (err) {
            console.error(err)
            return
        }
        if (results.length > 0) {
            res.json('votre mail est déjà enregistré')
            console.log(results)
            return
        }
    })
    //HASHPASSWORD
    let pass = bcrypt.hashSync(req.body.password, 10)
    console.log(req.body)
    //INSERT IN DATABASE
    database.sendQuery('INSERT INTO `users` (mail, password, phone_number, lastname, firstname) VALUES("' + req.body.email + '", "' + pass + '", "' + req.body.phone + '","' + req.body.lastname + '", "' + req.body.firstname + '")', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
            res.json(results);
        }
    })
});

router.post('/connexion', function (req, res, next) {
    database.sendQuery('SELECT * FROM `users` WHERE mail LIKE "' + req.body.email + '"', function (err, results) {
        var plainPassword = req.body.password;
        var hashedPassword;
        if (err) {
            console.error(err)
            res.json("Votre identifiant est incorrect");
        } else {
            if (results.length > 0) {
                hashedPassword = results[0].password;
                bcrypt.compare(plainPassword, hashedPassword, function (err, result) {
                    console.log("ok2")
                    if (result === true) {
                        var sessData = req.session;
                        sessData.someAttribute = results[0].id;
                        console.log(sessData)
                        res.json('ok');
                    } else {
                        res.json('Votre mot de passe est incorrect');
                    }
                })
            }
        }

    })
});

router.get('/logout', function(req, res, next) {
    if (req.session) {
        console.log(req.session)
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                res.json('Vous etes bien deconnecté');
            }
        });
    }
});

module.exports = router;
