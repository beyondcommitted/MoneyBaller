
const router = require("express").Router();
const { Team } = require("../../models");


router.post("/draft", async (req, res) => {
    try {
      const managerData = await Manager.create(req.body);
  
      req.session.save(() => {
        req.session.manager_id = managerData.id;
        req.session.logged_in = true;
        res.status(200).json(managerData);
      });
  
      res.json({
        name: managerData,
        message: "You are ready to create your team!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;