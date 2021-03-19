const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/userposts"
// router.route("/")
//   .get(postsController.findAll)
//   .post(postsController.create);

// // Matches with "/api/userposts/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

router.post("/post", (req,res) => {
  db.Post.create({
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    images: req.body.images
  })
})

module.exports = router;