var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var path = require('path')
var stripe = require("stripe")("sk_test_UxPMlPUtw9DySsNJZ05t0NGY");

var database = require('../services/database.js')
var pricePanierAmount;
var userSession;

router.get('/', function (req, res, next) {
    res.sendfile(path.resolve(__dirname + '/../public/index.html'))
    console.log(req.session)
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
            res.json('mail-idem')
        } else {
            //HASHPASSWORD
            let pass = bcrypt.hashSync(req.body.password, 10)
            //INSERT IN DATABASE
            database.sendQuery('INSERT INTO `users` (mail, password, phone_number, lastname, firstname) VALUES("' + req.body.email + '", "' + pass + '", "' + req.body.phone + '","' + req.body.lastname + '", "' + req.body.firstname + '")', function (err, results) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(results)
                    res.json(results);
                }
            })
        }
    })

});
var panier,
    user;
router.post('/connexion', function (req, res, next) {
    var priceBurger,
        priceBoisson,
        priceDessert,
        priceTotalPanier;

    database.sendQuery('SELECT * FROM `users` WHERE mail LIKE "' + req.body.email + '"', function (err, results) {
        var plainPassword = req.body.password;
        var hashedPassword;
        if (err) {
            console.error(err)
        } else {
            if (results.length > 0) {
                hashedPassword = results[0].password;
                bcrypt.compare(plainPassword, hashedPassword, function (err, result) {
                    if (result === true) {
                        user = req.session;
                        user.idUser = results[0].id;
                        res.json({
                            id: results[0].id,
                            name: results[0].firstname
                        })
                        panier = req.body.panier
                        console.log(panier)
                        database.sendQuery('SELECT * FROM `ingredients` WHERE id LIKE "' + req.body.panier.burger.resultPain[0].id + '"', function (err, results) {
                            if (err) {
                                console.error(err)
                            } else {
                                //PRIX BURGER
                                console.log(req.body.panier)
                                priceBurger = results[0].price
                                db_priceBoissons()

                                function db_priceBoissons() {
                                    if (panier.boissons.id == null) {
                                        console.log("pas boisson")
                                        priceBoisson = 0
                                        db_priceDesserts()
                                    } else {
                                        database.sendQuery('SELECT * FROM `boissons` WHERE id LIKE "' + panier.boissons.id + '"', function (err, results) {
                                            if (err) {
                                                console.error(err)
                                            } else {
                                                priceBoisson = results[0].price
                                                db_priceDesserts()
                                            }
                                        })
                                    }

                                }

                                //PRIX DESSERT
                                function db_priceDesserts() {
                                    if (panier.desserts.id == null) {
                                        console.log("pas de dessert")
                                        priceDessert = 0
                                        pricePanier()
                                    } else {
                                        database.sendQuery('SELECT * FROM `desserts` WHERE id LIKE "' + panier.desserts.id + '"', function (err, results) {
                                            if (err) {
                                                console.error(err)
                                            } else {
                                                priceDessert = results[0].price
                                                pricePanier()
                                            }
                                        })
                                    }
                                }

                                function pricePanier() {
                                    priceTotalPanier = priceBurger + priceBoisson + priceDessert
                                    console.log(priceTotalPanier)
                                    pricePanierAmount = priceTotalPanier * 100;
                                    res.end("good")
                                }
                            }
                        })

                    } else {
                        res.json('password');
                    }
                })

            } else {
                res.json("mail");
            }
        }
    })
})

router.get('/logout', function (req, res, next) {
    if (req.session) {
        console.log(req.session)
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                res.json('Vous etes bien deconnecté');
            }
        });
    }
});

router.post('/payment', function (req, res, next) {
    let amount = pricePanierAmount;
    stripe.customers.create({
        source: req.body.payment.id,
        email: userSession.email
    })
        .then(customer => stripe.charges.create({
            amount: amount,
            description: "Commande Make YourSelf",
            currency: "eur",
            customer: customer.id,
            receipt_email: customer.email,
            receipt_number: customer.phone
        }))
        .then((response) => {
            console.log(response.status)
            res.json(response)
            var dateStart = new Date
            var date = dateStart.getFullYear() + "-" + (dateStart.getMonth() + 1) + "-" + dateStart.getDate() + " " + dateStart.getHours() + ":" + dateStart.getMinutes() + ":" + dateStart.getSeconds()
            if (response.status == 'succeeded') {
                database.sendQuery('INSERT INTO `orders` (id_user, id_pain, id_condiment1, id_condiment2, id_condiment3, id_proteines, id_dessert, id_boisson, price, createdAt) VALUES(' + idUserOrder + ', ' + panier.burger.resultPain[0].id + ', ' + panier.burger.resultCondiment1[0].id + ', ' + panier.burger.resultCondiment2[0].id + ', ' + panier.burger.resultCondiment3[0].id + ', ' + panier.burger.resultProteines[0].id + ', ' + panier.desserts.id + ', ' + panier.boissons.id + ', ' + amount / 100 + ', "' + date + '")', function (err, results) {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(results)
                    }
                })
            }
        })
})

router.post('/updateInfo', function (req, res, next) {
    console.log(req.body)
    var idUserOrder = user.idUser
    database.sendQuery('SELECT * FROM `users` WHERE id LIKE "' + idUserOrder + '"', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
            if (req.body.userInfo.firstname != results[0].firstname || req.body.userInfo.lastname != results[0].lastname || req.body.userInfo.email != results[0].email || req.body.userInfo.phone != results[0].phone_number) {
                console.log("ok")
                database.sendQuery('UPDATE `users` SET firstname = "' + req.body.userInfo.firstname + '", lastname = "' + req.body.userInfo.lastname + '", mail = "' + req.body.userInfo.email + '", phone_number = "' + req.body.userInfo.phone + '" WHERE id = "' + idUserOrder + '"', function (err, results) {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(results)
                    }
                })
            }
            if (req.body.password != null) {
                let pass = bcrypt.hashSync(req.body.password, 10)
                //INSERT IN DATABASE
                database.sendQuery('UPDATE `users` SET password = "' + pass + '"', function (err, results) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(results)
                    }
                })
            }
        }
    })
})

router.get('/info-user', function (req, res, next) {
    database.sendQuery('SELECT * FROM `users` WHERE id LIKE "' + user.idUser + '"', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
            userSession = {
                firstname: results[0].firstname,
                lastname: results[0].lastname,
                email: results[0].mail,
                phone: results[0].phone_number,
                priceOrder: pricePanierAmount / 100
            };
            res.json(userSession)
        }
    })
})

module.exports = router;
