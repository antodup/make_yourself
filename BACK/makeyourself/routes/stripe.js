var express = require('express');
var router = express.Router();
var stripe = require("stripe")("sk_test_UxPMlPUtw9DySsNJZ05t0NGY");
const endpointSecret = 'whsec_Mw1CUO7P8g5Oae5TGlcjbRtAVvbXVF1k';

router.post('/webhook', function (req, res) {
    let sig = req.headers["stripe-signature"];
    console.log(req.body)
    try {
        let event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        console.log(event)
    }
    catch (err) {
        res.status(400).end()
    }

    // Return a response
    res.json({received: true});
});

module.exports = router;

