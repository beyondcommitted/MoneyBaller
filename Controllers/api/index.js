const router = require("express").Router();
const managerRoutes = require("./managerRoutes");


router.use("/managers", managerRoutes);


module.exports = router;
