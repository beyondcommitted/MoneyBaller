
const router = require("express").Router();
const { Team } = require("../../models");


router.post("/draft", async (req, res) => {
    try {
      const TeamData = await Team.create(req.body);
  
      req.session.save(() => {
        req.session.manager_id = TeamData.id;
        req.session.logged_in = true;
        res.status(200).json(TeamData);
      });
  
      res.json({
        name: TeamData,
        message: "created your team!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  console.log(Team)
  module.exports = router;