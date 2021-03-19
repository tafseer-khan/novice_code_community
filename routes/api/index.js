const router = require("express").Router();
const postRoutes = require("./posts.js");
const userRoutes = require("./user.js")

// Post and user routes
router.use("/posts", postRoutes);
router.use("user", userRoutes);

module.exports = router;