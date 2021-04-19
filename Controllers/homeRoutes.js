const router = require('express').Router();
const { Player, Manager } = require('../models');
// const withAuth = require('../utils/auth');

router.get("/", function (req, res) {
    res.render('login')
});



module.exports = router;
