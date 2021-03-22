const router = require("express").Router();
const db = require("../../models");
const postsController = require("../../controllers/postsController");

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

// router.delete("/:id",(req,res)=>{
//   db.Post.findByIdAndRemove(req.params.id)
//   res.json("sick")
// })

// router.get("/:id",(req,res)=>{
//   db.Post.find({"_id":req.params.id})
//   .then(results => res.json(results))
// })
router.route("/:id")
  .get(postsController.findById)
  .delete(postsController.remove)

router.get("/category/:category",(req,res) => {
  db.Post.find({'category':req.params.category}).sort({date: -1})
  .then(results => res.json(results))
})

router.post("/", (req,res) => {
  db.Post.create({
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    images: req.body.images
  })
  res.json("Post created")
})

module.exports = router;