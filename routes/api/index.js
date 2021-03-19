const router = require("express").Router();
const postRoutes = require("./posts.js");
const userRoutes = require("./user.js");
const replyRoutes = require("./replies.js");

// Post and user routes
router.use("/posts", postRoutes);
router.use("/user", userRoutes);
router.use("/replies",replyRoutes);

module.exports = router;