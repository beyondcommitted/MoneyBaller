const router = require('express').Router();
const { Manager } = require('../../models');

router.post('/', async (req, res) => {
try{
    const managerData = await Manager.create(req.body);
    console.log(managerData)
    console.log(req.body)
    res.json(managerData);
    } catch (err) {
      res.status(500).json(err);
    }
});
module.exports = router