const router = require("express").Router();
const userPosts = require("./userposts.js");
const userRoutes = require("./user.js")

// post routes
router.use("/userposts", userPosts);
router.use("/user", userRoutes)

module.exports = router;