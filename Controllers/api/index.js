const router = require("express").Router();
const managerRoutes = require("./managerRoutes");
// const draftRoutes = require('./draftRoutes');

router.use("/managers", managerRoutes);
// router.use('/players', draftRoutes);

module.exports = router;
