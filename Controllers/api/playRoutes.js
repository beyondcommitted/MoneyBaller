
const router = require("express").Router();
const { Team } = require("../../models");

router.get("/play", function (req, res) {
  res.render('play')
});




  console.log(Team)
  module.exports = router;